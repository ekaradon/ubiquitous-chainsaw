import { useEffect } from 'react'
import { useRouter } from './Router.context'

type RedirectProps = {
    to: string
}

function Redirect({ to }: RedirectProps) {
    const { setLocation } = useRouter()

    // do we want to keep redirect in history?
    useEffect(() => {
        setLocation(to)
    }, [to, setLocation])

    return null
}

export { Redirect }
