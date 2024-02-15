import { useCallback } from 'react'

import { useAppDispatch } from '@/shared/lib/hooks'
import { fetchNextPartPokemonesThunk } from '@/features/pokemonesInfiniteList'

export const useMainPage = () => {
    const dispatch = useAppDispatch()

    const loadNextPart = useCallback(() => {
        void dispatch(fetchNextPartPokemonesThunk())
    }, [dispatch])

    return { loadNextPart }
}
