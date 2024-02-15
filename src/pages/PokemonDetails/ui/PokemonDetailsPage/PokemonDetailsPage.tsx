import { memo, type FC, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classnames from 'classnames'

import { PokemonDetails } from '@/features/pokemonDetails'
import { getMainRoute } from '@/shared/constants/router'
import { BackNavigateButton } from '@/features/backNavigateButton'

import styles from './PokemonDetailsPage.module.scss'

interface PokemonDetailsPageProps {
    className?: string
}

const PokemonDetailsPage: FC<PokemonDetailsPageProps> = memo((props) => {
    const { className } = props
    const { name: pokemonName } = useParams<{ name: string }>()

    const navigate = useNavigate()

    const onTypeClick = useCallback(
        (type: string) => {
            navigate(getMainRoute() + `?type=${type}`)
        },
        [navigate]
    )

    if (!pokemonName) {
        return null
    }

    return (
        <div>
            <BackNavigateButton />
            <PokemonDetails
                className={classnames(styles.PokemonDetailsPage, className)}
                pokemonName={pokemonName}
                onTypeClick={onTypeClick}
            />
        </div>
    )
})

export default PokemonDetailsPage
