import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Header } from './Header'
import { Router } from './Router'
import { Route } from './Route'
import { Authenticated } from './Authenticated'
import { Login } from './Login'

type AppProps = {
    history?: string[]
    location: string
    user?: { permissions: string[] }
}

function App({ location, user }: AppProps) {
    return (
        <div className='App'>
            <Router initialLocation={location}>
                <Header />
                <Route to='login' component={Login} />
                <Route to='' component={Authenticated} />
            </Router>
        </div>
    )
}

export default App
