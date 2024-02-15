export enum AppRoutes {
    MAIN = 'MAIN',
    POKEMON_DETAILS = 'POKEMON_DETAILS',

    NOT_FOUND = 'NOT_FOUND'
}

export const getMainRoute = () => '/'
export const getPokemonDetailsRoute = (name: string) => '/' + name

export const getNotFoundRoute = () => '*'
