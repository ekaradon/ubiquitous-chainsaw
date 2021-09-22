import { ReactElement } from 'react'
import { RouterProvider, useRouter } from './Router'

type RouteProps = {
    component: () => ReactElement
    exact?: boolean
    to: string
}

function isNotEmpty(string: string) {
    return !!string
}

function Route({ component: Component, exact, to }: RouteProps) {
    const { history, location } = useRouter()
    const locationWithoutLeadingSlash = location
        .split('/')
        .filter(isNotEmpty)
        .join('/')

    if (locationWithoutLeadingSlash.slice(0, to.length) !== to) {
        return null
    }

    const newLocation = locationWithoutLeadingSlash.substr(to.length)

    if (exact && newLocation.length) {
        return null
    }

    return (
        <RouterProvider value={{ history, location: `/${newLocation}` }}>
            <Component />
        </RouterProvider>
    )
}

export { Route }
