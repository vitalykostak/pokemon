import { Button as AntButton, type ButtonProps } from 'antd'
import { memo, type FC } from 'react'

const Button: FC<ButtonProps> = memo((props) => <AntButton {...props} />)

export default Button
