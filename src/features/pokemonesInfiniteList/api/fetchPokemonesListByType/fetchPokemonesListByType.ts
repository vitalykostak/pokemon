import { type BasicPokemonInfo } from '@/entities/Pokemon'
import { $api } from '@/shared/lib/api/api'

interface FetchPokemonesListByTypeProps {
    type?: string
}

export const fetchPokemonesListByType = async (
    props: FetchPokemonesListByTypeProps
): Promise<BasicPokemonInfo[]> => {
    const { type } = props

    const list = await $api.get<FetchPokemonesListReturnType>('/type/' + type)

    return list.data?.pokemon?.map((p) => p.pokemon) || []
}

interface FetchPokemonesListReturnType {
    pokemon: Array<{ pokemon: BasicPokemonInfo }>
}
