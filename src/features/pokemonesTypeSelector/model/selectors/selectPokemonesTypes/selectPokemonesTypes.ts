import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectPokemonesTypes = (state: StateSchema) => state.pokemonesTypes.items
