import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Header } from './Header'
import { Route } from './Route'
import { RouterProvider } from './Router'
import { Authenticated } from './Authenticated'
import { Login } from './Login'

type AppProps = {
    history?: string[]
    location: string
    user?: { permissions: string[] }
}

function App({ location, history = [], user }: AppProps) {
    return (
        <div className='App'>
            <Header />
            <RouterProvider value={{ location, history }}>
                <Route to='login' component={Login} />
                <Route to='' component={Authenticated} />
            </RouterProvider>
        </div>
    )
}

export default App
