import { memo, type FC } from 'react'
import { Select as AntSelect, type SelectProps } from 'antd'

const Select: FC<SelectProps> = memo((props) => <AntSelect {...props} />)

export default Select
