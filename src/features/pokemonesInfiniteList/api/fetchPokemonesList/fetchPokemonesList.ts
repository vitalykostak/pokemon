import { type BasicPokemonInfo } from '@/entities/Pokemon'
import { $api } from '@/shared/lib/api/api'

interface FetchPokemonesListProps {
    limit: number
    offset: number
}

export const fetchPokemonesList = async (props: FetchPokemonesListProps): Promise<BasicPokemonInfo[]> => {
    const list = await $api.get<FetchPokemonesListReturnType>('/pokemon', {
        params: props
    })

    return list.data?.results || []
}

interface FetchPokemonesListReturnType {
    results: BasicPokemonInfo[]
}
