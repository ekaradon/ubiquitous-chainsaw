import { ReactNode } from 'react'
import { useRouter } from './Router.context'

type LinkProps = {
    children: ReactNode
    to: string
}

function Link({ to, children }: LinkProps) {
    const { location, setUrl } = useRouter()
    function goToLocation() {
        const newLocation = to.startsWith('/') ? to : `${location}/${to}`
        setUrl(newLocation)
    }

    return <span onClick={goToLocation}>{children}</span>
}

export { Link }
