import { memo, type FC } from 'react'
import classnames from 'classnames'

import { type BasicPokemonInfo } from '../../model/types/pokemon'
import PokemonCard from '../PokemonCard/PokemonCard'

import styles from './PokemonCardList.module.scss'

interface PokemonCardListProps {
    className?: string
    pokemones: BasicPokemonInfo[]
    onPokemonClick?: (pokemon: BasicPokemonInfo) => void
}

const PokemonCardList: FC<PokemonCardListProps> = memo((props) => {
    const { className, pokemones, onPokemonClick } = props

    return (
        <div className={classnames(className)}>
            {pokemones.map((p) => (
                <PokemonCard
                    key={p.url}
                    pokemon={p}
                    className={styles.PokemonCardItem}
                    onClick={onPokemonClick}
                />
            ))}
        </div>
    )
})

export default PokemonCardList
