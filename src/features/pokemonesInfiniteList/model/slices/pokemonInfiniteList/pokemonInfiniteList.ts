import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type PokemonesInfiniteListSchema } from '../../types/pokemonesInfiniteList'
import { fetchPokemonesThunk } from '../../services/fetchPokemonesThunk/fetchPokemonesThunk'

const initialState: PokemonesInfiniteListSchema = {
    items: [],
    limit: 20,
    page: 1,
    isPaginationEnabled: true,
    isLoading: false,
    error: undefined,
    hasMore: true,
    type: undefined
}

export const pokemonInfiniteList = createSlice({
    name: 'pokemonInfiniteList',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<string | undefined>) => {
            state.type = action.payload
        },
        incrementPage: (state) => {
            state.page = state.page + 1
        },
        resetPage: (state) => {
            state.page = 1
        },
        setIsPaginationEnabled: (state, action: PayloadAction<boolean>) => {
            state.isPaginationEnabled = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPokemonesThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPokemonesThunk.fulfilled, (state, action) => {
            if (action.meta?.arg?.replace) {
                state.items = action.payload
            } else {
                state.items = [...state.items, ...action.payload]
            }
            state.error = undefined

            if (action.payload.length < state.limit) {
                state.hasMore = false
            }
            state.isLoading = false
        })
        builder.addCase(fetchPokemonesThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const pokemonInfiniteListActions = pokemonInfiniteList.actions
export const pokemonInfiniteListReducer = pokemonInfiniteList.reducer
