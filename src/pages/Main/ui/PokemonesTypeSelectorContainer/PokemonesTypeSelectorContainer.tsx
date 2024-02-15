import { memo, type FC, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PokemonesTypeSelector } from '@/features/pokemonesTypeSelector'
import { useAppDispatch } from '@/shared/lib/hooks'
import { pokemonInfiniteListActions } from '@/features/pokemonesInfiniteList'
import { fetchPokemonesThunk } from '@/features/pokemonesInfiniteList/model/services/fetchPokemonesThunk/fetchPokemonesThunk'
import { clearQueryParams } from '@/shared/lib/url/clearQueryParams/clearQueryParams'

import styles from './PokemonesTypeSelectorContainer.module.scss'
const PokemonesTypeSelectorContainer: FC = memo(() => {
    const dispatch = useAppDispatch()

    const [searchParams] = useSearchParams()

    const onChange = useCallback(
        (type?: string) => {
            if (!type) {
                return
            }
            dispatch(pokemonInfiniteListActions.resetPage())
            dispatch(pokemonInfiniteListActions.setType(type))
            dispatch(pokemonInfiniteListActions.setIsPaginationEnabled(false))
            void dispatch(fetchPokemonesThunk({ replace: true }))
        },
        [dispatch]
    )

    const onReset = useCallback(() => {
        clearQueryParams()
        dispatch(pokemonInfiniteListActions.resetPage())
        dispatch(pokemonInfiniteListActions.setType())
        dispatch(pokemonInfiniteListActions.setIsPaginationEnabled(true))
        void dispatch(fetchPokemonesThunk({ replace: true }))
    }, [dispatch])

    return (
        <div className={styles.PokemonesTypeSelectorContainer}>
            <PokemonesTypeSelector
                onChange={onChange}
                onClear={onReset}
                defaultType={searchParams.get('type') || ''}
            />
        </div>
    )
})

export default PokemonesTypeSelectorContainer
