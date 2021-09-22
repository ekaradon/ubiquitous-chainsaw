import { ReactNode } from 'react'
import { useRouter } from './Router.context'

type LinkProps = {
    children: ReactNode
    to: string
}

function Link({ to, children }: LinkProps) {
    const { location, setLocation } = useRouter()
    function goToLocation() {
        const newLocation = to.startsWith('/') ? to : `${location}/${to}`
        window.history.pushState({ from: location, to }, '', newLocation)
        setLocation(newLocation)
    }

    return <span onClick={goToLocation}>{children}</span>
}

export { Link }
