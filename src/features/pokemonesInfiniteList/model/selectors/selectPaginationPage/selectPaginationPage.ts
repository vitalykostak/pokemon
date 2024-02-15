import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectPaginationPage = (state: StateSchema) => state.pokemonesInfiniteList.page
