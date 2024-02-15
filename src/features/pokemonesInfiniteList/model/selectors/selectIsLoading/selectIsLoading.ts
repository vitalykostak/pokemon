import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectIsLoading = (state: StateSchema) =>
    state.pokemonesInfiniteList.isLoading
