import { useEffect, type MutableRefObject } from 'react'

interface UseInfiniteScrollProps {
    containerRef?: MutableRefObject<HTMLElement>
    triggerRef: MutableRefObject<HTMLElement>
    onIntersection?: () => void
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps) => {
    const { containerRef, triggerRef, onIntersection } = props

    useEffect(() => {
        if (!onIntersection) {
            return
        }

        const triggerElement = triggerRef.current

        const intersectionOptions = {
            root: containerRef ? containerRef.current : undefined,
            rootMargin: '0px',
            threshold: 1.0
        }

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onIntersection()
            }
        }, intersectionOptions)
        intersectionObserver.observe(triggerElement)

        return () => {
            intersectionObserver.unobserve(triggerElement)
        }
    }, [containerRef, triggerRef, onIntersection])
}
