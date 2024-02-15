import { type DetailedPokemonInfo } from '@/entities/Pokemon'

export interface PokemonDetailsSchema {
    pokemon: DetailedPokemonInfo | null
    isLoading: boolean
    error?: PokemonDetailsError
}

export enum PokemonDetailsError {
    NOT_FOUND = 'NOT_FOUND',
    SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG'
}
