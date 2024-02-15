import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectHasMore = (state: StateSchema) => state.pokemonesInfiniteList.hasMore
