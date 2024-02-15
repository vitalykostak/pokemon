import { memo, type FC } from 'react'
import { Alert } from 'antd'

interface NotFoundBannerProps {
    className?: string
}

const NotFoundBanner: FC<NotFoundBannerProps> = memo((props) => {
    const { className } = props

    return <Alert className={className} message="Not Found" type="error" />
})

export default NotFoundBanner
