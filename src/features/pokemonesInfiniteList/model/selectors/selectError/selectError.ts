import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectError = (state: StateSchema) => state.pokemonesInfiniteList.error
