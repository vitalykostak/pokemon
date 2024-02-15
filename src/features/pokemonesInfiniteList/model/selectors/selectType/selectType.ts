import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectType = (state: StateSchema) => state.pokemonesInfiniteList.type
