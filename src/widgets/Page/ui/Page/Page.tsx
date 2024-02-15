import { useRef, type FC, type ReactNode, type MutableRefObject } from 'react'
import classnames from 'classnames'

import { useInfiniteScroll } from '@/shared/lib/hooks'

import styles from './Page.module.scss'

interface PageProps {
    className?: string
    children?: ReactNode
    onScrollEnd?: () => void
}

const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({
        triggerRef,
        onIntersection: onScrollEnd
    })

    return (
        <main className={classnames(styles.Page, className)}>
            {children}
            {onScrollEnd && <div className={styles.scroll} ref={triggerRef} />}
        </main>
    )
}

export default Page
