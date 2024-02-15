import { memo, type FC, useCallback } from 'react'
import classNames from 'classnames'
import { Typography } from 'antd'

import { Card } from '@/shared/ui'

import { type BasicPokemonInfo } from '../../model/types/pokemon'

import styles from './PokemonCard.module.scss'

const { Text } = Typography

interface PokemonCardProps {
    className?: string
    pokemon: BasicPokemonInfo
    onClick?: (pokemon: BasicPokemonInfo) => void
}

const PokemonCard: FC<PokemonCardProps> = memo((props) => {
    const { className, pokemon, onClick } = props

    const additionsClasses = [className]

    const handleClick = useCallback(() => onClick?.(pokemon), [pokemon, onClick])

    return (
        <Card onClick={handleClick} className={classNames(styles.PokemonCard, ...additionsClasses)}>
            <Text strong className={styles.name}>
                {pokemon.name}
            </Text>
        </Card>
    )
})

export default PokemonCard
