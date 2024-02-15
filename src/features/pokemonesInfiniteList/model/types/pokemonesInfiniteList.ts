import { type BasicPokemonInfo } from '@/entities/Pokemon'
import { type PaginationParams } from '@/shared/types/PaginationParams'

export interface PokemonesInfiniteListSchema extends PaginationParams {
    items: BasicPokemonInfo[]
    isPaginationEnabled: boolean
    isLoading: boolean
    error?: string
    hasMore: boolean
    type?: string
}
