import { memo, type FC } from 'react'
import { Spin } from 'antd'
import classnames from 'classnames'

import styles from './LoaderBanner.module.scss'

interface LoaderBannerProps {
    className?: string
    block?: boolean
}

const LoaderBanner: FC<LoaderBannerProps> = memo((props) => {
    const { className, block } = props

    return (
        <div className={classnames(styles.LoaderBanner, className, block ? styles.block : '')}>
            <Spin size="large" />
        </div>
    )
})

export default LoaderBanner
