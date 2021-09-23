import { Typography } from '@mui/material'
import { ReactElement } from 'react'

import { useAuth } from './Auth.context'
import { Redirect } from './Redirect'
import { RouterProvider, useRouter } from './Router.context'

type RouteProps = {
    component: () => ReactElement
    exact?: boolean
    permissions?: string[]
    to: string
}

function isNotEmpty(string: string) {
    return !!string
}

function Route({ component: Component, exact, to, permissions }: RouteProps) {
    const { location, setLocation } = useRouter()
    const { user } = useAuth()
    const locationWithoutLeadingSlash = location.split('/').filter(isNotEmpty).join('/')

    if (locationWithoutLeadingSlash.slice(0, to.length) !== to) {
        return null
    }

    const newLocation = locationWithoutLeadingSlash.substr(to.length)

    if (exact && newLocation.length) {
        return null
    }

    if (permissions && !user) {
        return <Redirect to='/login' />
    }

    if (!permissions || permissions.every((permission) => user?.permissions.includes(permission))) {
        return (
            <RouterProvider value={{ location: `/${newLocation}`, setLocation }}>
                <Component />
            </RouterProvider>
        )
    }

    return <Typography variant='h2'>fallback</Typography>
}

export { Route }
