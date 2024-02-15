import { createSlice } from '@reduxjs/toolkit'

import { type PokemonesTypesSchema } from '../../types/pokemonesTypesSchema'
import { fetchPokemonesTypesThunk } from '../../services/fetchPokemonesTypesThunk/fetchPokemonesTypesThunk'

const initialState: PokemonesTypesSchema = {
    items: [],
    isLoading: false,
    error: undefined
}

export const pokemonesTypesSlice = createSlice({
    name: 'pokemonesTypes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonesTypesThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPokemonesTypesThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = undefined
            state.items = action.payload
        })
        builder.addCase(fetchPokemonesTypesThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const pokemonesTypesActions = pokemonesTypesSlice.actions
export const pokemonesTypesReducer = pokemonesTypesSlice.reducer
