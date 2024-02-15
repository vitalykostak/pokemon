import { memo, type FC, type ReactNode } from 'react'
import classnames from 'classnames'

import styles from './WithStickyRightBar.module.scss'

interface WithStickyRightBarProps {
    className?: string
    children: ReactNode
    rightBar: ReactNode
}

const WithStickyRightBar: FC<WithStickyRightBarProps> = memo((props) => {
    const { className, children, rightBar } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classnames(styles.WithStickyRightBar, mods, additionsClasses)}>
            {children}
            <div className={styles.right}>{rightBar}</div>
        </div>
    )
})

export default WithStickyRightBar
