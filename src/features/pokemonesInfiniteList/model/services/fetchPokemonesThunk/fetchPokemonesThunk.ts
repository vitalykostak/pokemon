import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'
import { fetchPokemonesList } from '@/features/pokemonesInfiniteList/api/fetchPokemonesList/fetchPokemonesList'
import { type BasicPokemonInfo } from '@/entities/Pokemon'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

import { selectPaginationLimit } from '../../selectors/selectPaginationLimit/selectPaginationLimit'
import { selectPaginationPage } from '../../selectors/selectPaginationPage/selectPaginationPage'
import { selectType } from '../../selectors/selectType/selectType'
import { fetchPokemonesListByType } from '../../../api/fetchPokemonesListByType/fetchPokemonesListByType'

interface T {
    state: StateSchema
    dispatch: AppDispatch
    rejectValue: string
}

interface FetchPokemonesThunkProps {
    replace?: boolean
}

export const fetchPokemonesThunk = createAsyncThunk<BasicPokemonInfo[], FetchPokemonesThunkProps, T>(
    'pokemonesInfiniteList/fetchPokemonesThunk',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi

        try {
            const state = getState()

            const limit = selectPaginationLimit(state)
            const page = selectPaginationPage(state)
            const type = selectType(state)

            if (!type) {
                const result = await fetchPokemonesList({
                    limit,
                    offset: limit * page - limit
                })

                return result
            }

            addQueryParams({ type })

            const resultByTypes = await fetchPokemonesListByType({ type })

            if (!resultByTypes.length) throw new Error('Not Found')

            return resultByTypes
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Error')
        }
    }
)
