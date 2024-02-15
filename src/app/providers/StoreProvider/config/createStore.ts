import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { pokemonInfiniteListReducer } from '@/features/pokemonesInfiniteList'
import { pokemonesTypesReducer } from '@/features/pokemonesTypeSelector'
import { pokemonDetailsInfoReducer } from '@/features/pokemonDetails'

import { type StateSchema } from '../types/StateSchema'

export const createReduxStore = () => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        pokemonesInfiniteList: pokemonInfiniteListReducer,
        pokemonesTypes: pokemonesTypesReducer,
        pokemonDetails: pokemonDetailsInfoReducer
    }

    const store = configureStore<StateSchema>({
        reducer: rootReducer
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
