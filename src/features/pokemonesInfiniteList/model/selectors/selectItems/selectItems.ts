import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectItems = (state: StateSchema) => state.pokemonesInfiniteList.items
