import { useEffect } from 'react'
import { useRouter } from './Router.context'

type RedirectProps = {
    to: string
}

function Redirect({ to }: RedirectProps) {
    const { location, setLocation } = useRouter()

    // do we want to keep redirect in history?
    useEffect(() => {
        setLocation(to)
    }, [location, setLocation, to])

    return null
}

export { Redirect }
