import { createAsyncThunk } from '@reduxjs/toolkit'

import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'
import { type AppDispatch } from '@/app/providers/StoreProvider/config/createStore'
import { type DetailedPokemonInfo } from '@/entities/Pokemon'

import { fetchPokemonDetailsByName } from '../../../api/fetchPokemonDetailsByName/fetchPokemonDetailsByName'
import { PokemonDetailsError } from '../../types/pokemonDetails'

interface T {
    state: StateSchema
    dispatch: AppDispatch
    rejectValue: PokemonDetailsError
}

interface FetchDetailsThunkProps {
    name: string
}

export const fetchPokemonDetailsThunk = createAsyncThunk<DetailedPokemonInfo, FetchDetailsThunkProps, T>(
    'pokemonDetails/fetchPokemonDetailsThunk',
    async (props, thunkApi) => {
        const { name: pokemonName } = props
        const { rejectWithValue } = thunkApi

        try {
            const result = await fetchPokemonDetailsByName({ name: pokemonName })
            if (!result) {
                throw new Error(PokemonDetailsError.NOT_FOUND)
            }

            return result
        } catch (e) {
            if (e instanceof Error) {
                return rejectWithValue(
                    e.message === PokemonDetailsError.NOT_FOUND
                        ? e.message
                        : PokemonDetailsError.SOMETHING_WENT_WRONG
                )
            }

            return rejectWithValue(PokemonDetailsError.SOMETHING_WENT_WRONG)
        }
    }
)
