import { type PokemonDetailsSchema } from '@/features/pokemonDetails'
import { type PokemonesInfiniteListSchema } from '@/features/pokemonesInfiniteList'
import { type PokemonesTypesSchema } from '@/features/pokemonesTypeSelector'

export interface StateSchema {
    pokemonesInfiniteList: PokemonesInfiniteListSchema
    pokemonesTypes: PokemonesTypesSchema
    pokemonDetails: PokemonDetailsSchema
}
