import { type RouteProps } from 'react-router-dom'

import { MainPage } from '@/pages/Main'
import { AppRoutes, getMainRoute, getNotFoundRoute, getPokemonDetailsRoute } from '@/shared/constants/router'
import { PokemonDetails } from '@/pages/PokemonDetails'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />
    },
    [AppRoutes.POKEMON_DETAILS]: {
        path: getPokemonDetailsRoute(':name'),
        element: <PokemonDetails />
    },
    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <div>Not Found Page</div>
    }
}
