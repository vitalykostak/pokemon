import { memo, type FC } from 'react'
import classnames from 'classnames'
import { Divider, List } from 'antd'
import CheckableTag from 'antd/es/tag/CheckableTag'

import { type PokemonType } from '@/entities/Pokemon'

interface PokemonTypesTagsProps {
    className?: string
    types: PokemonType[]
    onTypeClick?: (type: string) => void
}

const PokemonTypesTags: FC<PokemonTypesTagsProps> = memo((props) => {
    const { className, types, onTypeClick } = props

    return (
        <div className={classnames(className)}>
            <Divider orientation="left">Types</Divider>
            <List
                dataSource={types}
                renderItem={(item) => (
                    <CheckableTag checked={true} onClick={() => onTypeClick?.(String(item.id))}>
                        {item.name}
                    </CheckableTag>
                )}
            />
        </div>
    )
})

export default PokemonTypesTags
