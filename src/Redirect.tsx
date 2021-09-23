import { useEffect } from 'react'
import { useRouter } from './Router.context'

type RedirectProps = {
    to: string
}

function Redirect({ to }: RedirectProps) {
    const { location, setUrl } = useRouter()

    // do we want to keep redirect in history?
    useEffect(() => {
        setUrl(to)
    }, [location, setUrl, to])

    return null
}

export { Redirect }
