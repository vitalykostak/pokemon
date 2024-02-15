import { $api } from '@/shared/lib/api/api'
import { type PokemonType } from '@/entities/Pokemon/model/types/pokemon'

export const fetchPokemonesTypes = async (): Promise<PokemonType[]> => {
    const list = await $api.get<FetchPokemonesListReturnType>('/type')

    return transformResponse(list.data?.results || [])
}

const transformResponse = (res: ReturnedItem[]): PokemonType[] =>
    res.map((e) => {
        const id = Number(
            e.url
                ?.split('/')
                .filter((e) => Boolean(e))
                ?.pop()
        )
        return { name: e.name, id }
    })

interface FetchPokemonesListReturnType {
    results: any[]
}

interface ReturnedItem {
    name: string
    url: string
}
