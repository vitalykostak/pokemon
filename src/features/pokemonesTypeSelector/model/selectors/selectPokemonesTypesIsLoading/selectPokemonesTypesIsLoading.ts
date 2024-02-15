import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectPokemonesTypesIsLoading = (state: StateSchema) => state.pokemonesTypes.isLoading
