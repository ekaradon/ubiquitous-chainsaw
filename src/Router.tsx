import { ReactNode, useEffect, useState } from 'react'
import { RouterProvider } from './Router.context'

type RouterProps = {
    children: ReactNode
    initialLocation: string
}

function Router({ children, initialLocation }: RouterProps) {
    const [location, setLocation] = useState<string>(initialLocation)

    useEffect(() => {
        window.history.pushState({ location }, '', location)
    }, [location])

    useEffect(() => {
        function listenToPopState() {
            const { pathname } = window.location
            setLocation(pathname)
        }

        window.addEventListener('popstate', listenToPopState)
        return () => void window.removeEventListener('popstate', listenToPopState)
    })

    return <RouterProvider value={{ location, setLocation }}>{children}</RouterProvider>
}

export { Router }
