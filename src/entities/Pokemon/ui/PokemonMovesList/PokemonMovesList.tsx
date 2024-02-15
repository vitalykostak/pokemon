import { memo, type FC } from 'react'
import classnames from 'classnames'
import { Divider, List } from 'antd'

import { type PokemonMove } from '@/entities/Pokemon'

interface PokemonMovesListProps {
    className?: string
    moves: PokemonMove[]
}

const PokemonMovesList: FC<PokemonMovesListProps> = memo((props) => {
    const { className, moves } = props

    return (
        <div className={classnames(className)}>
            <Divider orientation="left">Moves</Divider>
            <List dataSource={moves} renderItem={(item) => <List.Item>{item.move?.name}</List.Item>} />
        </div>
    )
})

export default PokemonMovesList
