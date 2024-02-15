import { memo, type FC, type ReactNode } from 'react'
import classnames from 'classnames'

import styles from './Card.module.scss'

interface CardProps {
    className?: string
    children: ReactNode
    onClick?: () => void
}

const Card: FC<CardProps> = memo((props) => {
    const { className, children, ...other } = props

    return (
        <div className={classnames(styles.Card, className)} {...other}>
            {children}
        </div>
    )
})

export default Card
