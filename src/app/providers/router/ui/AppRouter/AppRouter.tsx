import { memo, type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { LoaderBanner } from '@/shared/ui'

import { routeConfig } from '../../config/routeConfig'

import styles from './AppRouter.module.scss'

const AppRouter: FC = memo(() => {
    const renderRoute = (r: RouteProps) => (
        <Route
            key={r.path}
            path={r.path}
            element={
                <Suspense fallback={<LoaderBanner block className={styles.loaderContainer} />}>
                    {r.element}{' '}
                </Suspense>
            }
        />
    )

    return <Routes>{Object.values(routeConfig).map((r) => renderRoute(r))}</Routes>
})

export default AppRouter
