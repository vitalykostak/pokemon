import { createSlice } from '@reduxjs/toolkit'

import { type PokemonDetailsSchema } from '../../types/pokemonDetails'
import { fetchPokemonDetailsThunk } from '../../services/fetchPokemonDetailsThunk/fetchPokemonDetailsThunk'

const initialState: PokemonDetailsSchema = {
    pokemon: null,
    isLoading: false,
    error: undefined
}

export const pokemonDetailsInfoSlice = createSlice({
    name: 'pokemonDetailsInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonDetailsThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPokemonDetailsThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.pokemon = action.payload
        })
        builder.addCase(fetchPokemonDetailsThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
            state.pokemon = null
        })
    }
})

export const pokemonDetailsInfoActions = pokemonDetailsInfoSlice.actions
export const pokemonDetailsInfoReducer = pokemonDetailsInfoSlice.reducer
