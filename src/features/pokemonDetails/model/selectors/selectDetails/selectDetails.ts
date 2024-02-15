import { type StateSchema } from '@/app/providers/StoreProvider/types/StateSchema'

export const selectDetails = (state: StateSchema) => state.pokemonDetails.pokemon
