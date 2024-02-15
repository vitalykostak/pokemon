import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'

import { fetchPokemonesThunk } from '../fetchPokemonesThunk/fetchPokemonesThunk'
import { pokemonInfiniteListActions } from '../../slices/pokemonInfiniteList/pokemonInfiniteList'
import { selectIsLoading } from '../../selectors/selectIsLoading/selectIsLoading'
import { selectIsPaginationEnabled } from '../../selectors/selectIsPaginationEnabled/selectIsPaginationEnabled'
import { selectError } from '../../selectors/selectError/selectError'
import { selectHasMore } from '../../selectors/selectHasMore/selectHasMore'

interface T {
    state: StateSchema
    dispatch: AppDispatch
    rejectValue: string
}

export const fetchNextPartPokemonesThunk = createAsyncThunk<undefined, undefined, T>(
    'pokemonesInfiniteList/fetchNextPartPokemonesThunk',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi

        const state = getState()

        const isLoading = selectIsLoading(state)
        const isPaginationEnabled = selectIsPaginationEnabled(state)
        const error = selectError(state)
        const hasMore = selectHasMore(state)

        if (isLoading || !isPaginationEnabled || error || !hasMore) {
            return
        }

        dispatch(pokemonInfiniteListActions.incrementPage())
        void dispatch(fetchPokemonesThunk({}))

        return undefined
    }
)
