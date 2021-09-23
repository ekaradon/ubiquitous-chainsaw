import { ReactNode } from 'react'
import { useRouter } from './Router.context'

type LinkProps = {
    children: ReactNode
    to: string
}

function Link({ to, children }: LinkProps) {
    const { setLocation } = useRouter()
    function goToLocation() {
        setLocation((previousLocation) => (to.startsWith('/') ? to : `${previousLocation}/${to}`))
    }

    return <span onClick={goToLocation}>{children}</span>
}

export { Link }
