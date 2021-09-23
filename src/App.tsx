import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useEffect, useState } from 'react'
import useLocalStorage from '@rehooks/local-storage'

import { Header } from './Header'
import { Router } from './Router'
import { Route } from './Route'
import { Authenticated } from './Authenticated'
import { Login } from './Login'
import { User } from './User'
import { AuthProvider } from './Auth.context'
import { Typography } from '@mui/material'

type AppProps = {
    history?: string[]
    location: string
    user?: User
}

function App({ location, user: initialUser }: AppProps) {
    const [isReady, setReady] = useState<boolean>(false)
    const [localStorageUser] = useLocalStorage<User | null>('user')
    const [user, setUser] = useState<User | null>(initialUser || null)

    useEffect(() => {
        if (localStorageUser) {
            setUser(localStorageUser)
        }
        setReady(true)
    }, [localStorageUser])

    if (!isReady) {
        return <Typography>loading...</Typography>
    }

    return (
        <div className='App'>
            <AuthProvider value={{ user, setUser }}>
                <Router initialLocation={location}>
                    <Header />
                    <Route to='login' component={Login} />
                    <Route to='' component={Authenticated} permissions={['isLogged']} />
                </Router>
            </AuthProvider>
        </div>
    )
}

export default App
