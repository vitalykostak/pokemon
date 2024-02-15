import { memo, type FC } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/shared/ui'

interface BackNavigateButtonProps {
    className?: string
}

const BackNavigateButton: FC<BackNavigateButtonProps> = memo((props) => {
    const { className } = props

    const navigate = useNavigate()

    const onClick = () => {
        navigate(-1)
    }

    return (
        <Button className={className} type="link" onClick={onClick}>
            Back Button
        </Button>
    )
})

export default BackNavigateButton
