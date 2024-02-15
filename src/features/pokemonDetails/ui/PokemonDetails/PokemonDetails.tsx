import { memo, type FC, useEffect } from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { Avatar, Card } from 'antd'

import { useAppDispatch } from '@/shared/lib/hooks'
import { Page } from '@/widgets/Page'
import { PokemonMovesList, PokemonTypesTags } from '@/entities/Pokemon'
import { LoaderBanner, NotFoundBanner } from '@/shared/ui'

import { fetchPokemonDetailsThunk } from '../../model/services/fetchPokemonDetailsThunk/fetchPokemonDetailsThunk'
import { selectDetails } from '../../model/selectors/selectDetails/selectDetails'
import { selectIsLoading } from '../../model/selectors/selectIsLoading/selectIsLoading'
import { selectError } from '../../model/selectors/selectError/selectError'

interface PokemonDetailsProps {
    className?: string
    pokemonName: string
    onTypeClick?: (type: string) => void
}

const PokemonDetails: FC<PokemonDetailsProps> = memo((props) => {
    const { className, pokemonName, onTypeClick } = props

    const pokemon = useSelector(selectDetails)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    const dispatch = useAppDispatch()

    useEffect(() => {
        void dispatch(fetchPokemonDetailsThunk({ name: pokemonName }))
    }, [dispatch, pokemonName])

    if (isLoading) {
        return <LoaderBanner block />
    }

    if (error) {
        return (
            <Page className={classnames(className)}>
                <NotFoundBanner />
            </Page>
        )
    }

    return (
        <Page className={classnames(className)}>
            <Card title={pokemon?.name} extra={<Avatar size={100} src={pokemon?.sprites?.front_default} />}>
                {pokemon?.types && <PokemonTypesTags types={pokemon?.types} onTypeClick={onTypeClick} />}
                {pokemon?.moves && <PokemonMovesList moves={pokemon.moves} />}
            </Card>
        </Page>
    )
})

export default PokemonDetails
