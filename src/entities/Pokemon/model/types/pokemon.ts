export interface BasicPokemonInfo {
    name: string
    url: string
}

export interface DetailedPokemonInfo {
    id: number
    name: string
    moves: PokemonMove[]
    types: PokemonType[]
    sprites: PokemonSprites
}

export interface PokemonMove {
    move: {
        name: string
    }
}
export interface PokemonType {
    name: string
    id: number
}

export interface PokemonSprites {
    front_default?: string
}
