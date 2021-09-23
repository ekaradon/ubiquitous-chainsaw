import { Fragment } from 'react'

import { Route } from './Route'
import { Dashboard } from './Dashboard'
import { Home } from './Home'
import { Admin } from './Admin'

function Authenticated() {
    return (
        <Fragment>
            <Route to='dashboard' component={Dashboard} permissions={['readDashboard']} />
            <Route exact to='' component={Home} />
            <Route to='admin' component={Admin} />
        </Fragment>
    )
}

export { Authenticated }
