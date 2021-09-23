import { ReactNode, useCallback, useEffect, useState } from 'react'
import { RouterProvider } from './Router.context'

type RouterProps = {
    children: ReactNode
    initialLocation: string
}

function Router({ children, initialLocation }: RouterProps) {
    const [location, setLocation] = useState<string>(initialLocation)

    const setUrl = useCallback((newLocation: string) => {
        window.history.pushState({ newLocation }, '', newLocation)
        setLocation(newLocation)
    }, [])

    useEffect(() => {
        function listenToPopState() {
            const { pathname } = window.location
            setLocation(pathname)
        }

        window.addEventListener('popstate', listenToPopState)
        return () => void window.removeEventListener('popstate', listenToPopState)
    })

    return <RouterProvider value={{ location, setUrl }}>{children}</RouterProvider>
}

export { Router }
