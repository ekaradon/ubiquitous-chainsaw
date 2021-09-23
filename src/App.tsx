import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useState } from 'react'

import { Header } from './Header'
import { Router } from './Router'
import { Route } from './Route'
import { Authenticated } from './Authenticated'
import { Login } from './Login'
import { User } from './User'
import { AuthProvider } from './Auth.context'

type AppProps = {
    history?: string[]
    location: string
    user?: User
}

function App({ location, user: initialUser }: AppProps) {
    const [user, setUser] = useState<User | null>(initialUser || null)

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
