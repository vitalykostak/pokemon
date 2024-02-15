import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectShouldHandleOnScrollEnd = (state: StateSchema) =>
    Boolean(state.pokemonesInfiniteList.items.length)
