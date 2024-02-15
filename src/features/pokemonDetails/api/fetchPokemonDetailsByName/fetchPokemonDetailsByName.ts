import { type PokemonMove, type DetailedPokemonInfo } from '@/entities/Pokemon'
import { type PokemonSprites } from '@/entities/Pokemon/model/types/pokemon'
import { $api } from '@/shared/lib/api/api'

interface FetchPokemonDetailsByNameProps {
    name: string
}

interface FetchPokemonDetailsByName {
    id: number
    name: string
    moves: PokemonMove[]
    types: ReturnedType[]
    sprites: PokemonSprites
}

interface ReturnedType {
    type: {
        name: string
        url: string
    }
}

export const fetchPokemonDetailsByName = async (
    props: FetchPokemonDetailsByNameProps
): Promise<DetailedPokemonInfo | null> => {
    try {
        const pokemon = await $api.get<FetchPokemonDetailsByName>('/pokemon/' + props.name)

        return transformResponse(pokemon.data || {})
    } catch {
        return null
    }
}

const transformResponse = (res: FetchPokemonDetailsByName): DetailedPokemonInfo => {
    const types = res.types.map((e) => {
        const id = Number(
            e.type.url
                ?.split('/')
                .filter((e) => Boolean(e))
                ?.pop()
        )
        return { name: e.type.name, id }
    })

    return { id: res.id, name: res.name, moves: res.moves, types, sprites: res.sprites }
}
