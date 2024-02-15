import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectPaginationLimit = (state: StateSchema) => state.pokemonesInfiniteList.limit
