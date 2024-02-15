import { memo, type FC } from 'react'

import AppRouter from './providers/router/ui/AppRouter/AppRouter'
import './styles/reset.css'

const App: FC = memo(() => {
    return <AppRouter />
})

export default App
