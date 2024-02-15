import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'
import { type PokemonType } from '@/entities/Pokemon/model/types/pokemon'

import { fetchPokemonesTypes } from '../../../api/fetchPokemonesTypes/fetchPokemonesTypes'

interface T {
    state: StateSchema
    dispatch: AppDispatch
    rejectValue: string
}

export const fetchPokemonesTypesThunk = createAsyncThunk<PokemonType[], undefined, T>(
    'pokemonesTypeSelector/fetchPokemonesTypesThunk',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi

        try {
            const result = await fetchPokemonesTypes()

            return result
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(e.message)
            }

            return rejectWithValue('Error')
        }
    }
)
