import { memo, type FC } from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux'

import { PokemonesInfiniteList } from '@/features/pokemonesInfiniteList'
import { Page } from '@/widgets/Page'
import { WithStickyRightBar } from '@/shared/layouts'

import { useMainPage } from '../../hooks/useMainPage/useMainPage'
import PokemonesTypeSelectorContainer from '../PokemonesTypeSelectorContainer/PokemonesTypeSelectorContainer'
import { selectShouldHandleOnScrollEnd } from '../../model/selectors/selectShouldHandleOnScrollEnd/selectShouldHandleOnScrollEnd'

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = memo((props) => {
    const { className } = props

    const { loadNextPart } = useMainPage()

    const shouldHandleOnScrollEnd = useSelector(selectShouldHandleOnScrollEnd)

    return (
        <Page
            className={classnames(className)}
            onScrollEnd={shouldHandleOnScrollEnd ? loadNextPart : undefined}
        >
            <WithStickyRightBar rightBar={<PokemonesTypeSelectorContainer />}>
                <PokemonesInfiniteList />
            </WithStickyRightBar>
        </Page>
    )
})

export default Main
