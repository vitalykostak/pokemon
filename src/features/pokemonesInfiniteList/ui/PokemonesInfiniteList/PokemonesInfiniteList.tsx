import { memo, type FC, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { type BasicPokemonInfo, PokemonCardList } from '@/entities/Pokemon'
import { useAppDispatch } from '@/shared/lib/hooks'
import { getPokemonDetailsRoute } from '@/shared/constants/router'
import { selectIsLoading } from '@/features/pokemonDetails/model/selectors/selectIsLoading/selectIsLoading'
import { LoaderBanner, NotFoundBanner } from '@/shared/ui'

import { selectItems } from '../../model/selectors/selectItems/selectItems'
import { initPokemonInfiniteList } from '../../model/services/initPokemonInfiniteList/initPokemonInfiniteList'
import { selectError } from '../../model/selectors/selectError/selectError'

import styles from './PokemonesInfiniteList.module.scss'

interface PokemonesInfiniteListProps {
    className?: string
}

const PokemonesInfiniteList: FC<PokemonesInfiniteListProps> = memo((props) => {
    const { className } = props

    const dispatch = useAppDispatch()

    const pokemones = useSelector(selectItems)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const onPokemonClick = useCallback(
        (pokemon: BasicPokemonInfo) => {
            navigate(getPokemonDetailsRoute(pokemon.name))
        },
        [navigate]
    )

    useEffect(() => {
        const effect = async () => {
            await dispatch(initPokemonInfiniteList({ searchParams }))
        }

        void effect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    if (isLoading) {
        return <LoaderBanner />
    }

    if (error) {
        return (
            <div className={classNames(styles.PokemonesInfiniteList, className)}>
                <NotFoundBanner />
            </div>
        )
    }

    return (
        <div className={classNames(styles.PokemonesInfiniteList, className)}>
            <PokemonCardList pokemones={pokemones} onPokemonClick={onPokemonClick} />
        </div>
    )
})

export default PokemonesInfiniteList
