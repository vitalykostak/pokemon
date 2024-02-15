import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectIsPaginationEnabled = (state: StateSchema) =>
    state.pokemonesInfiniteList.isPaginationEnabled
