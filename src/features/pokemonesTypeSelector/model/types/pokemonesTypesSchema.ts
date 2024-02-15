import { type PokemonType } from '@/entities/Pokemon/model/types/pokemon'

export interface PokemonesTypesSchema {
    items: PokemonType[]
    isLoading: boolean
    error?: string
}
