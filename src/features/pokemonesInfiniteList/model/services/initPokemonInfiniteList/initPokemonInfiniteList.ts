import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'

import { fetchPokemonesThunk } from '../fetchPokemonesThunk/fetchPokemonesThunk'
import { pokemonInfiniteListActions } from '../../slices/pokemonInfiniteList/pokemonInfiniteList'

interface T {
    state: StateSchema
    dispatch: AppDispatch
    rejectValue: string
}

interface InitPokemonInfiniteListProps {
    searchParams: URLSearchParams
}

export const initPokemonInfiniteList = createAsyncThunk<undefined, InitPokemonInfiniteListProps, T>(
    'pokemonesInfiniteList/initPokemonInfiniteList',
    async (props, thunkApi) => {
        const { searchParams } = props
        const { dispatch } = thunkApi

        const type = searchParams.get('type')

        if (type) {
            dispatch(pokemonInfiniteListActions.setType(type))
            dispatch(pokemonInfiniteListActions.setIsPaginationEnabled(false))
            dispatch(pokemonInfiniteListActions.resetPage())
        }

        void dispatch(fetchPokemonesThunk({ replace: true }))

        return undefined
    }
)
