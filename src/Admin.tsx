import { Fragment } from 'react'
import { Button, Typography } from '@mui/material'

import { Link } from './Link'
import { Route } from './Route'
import { AdminUsers } from './AdminUsers'
import { AdminRoles } from './AdminRoles'

function AdminLandingPage() {
    return (
        <Fragment>
            <Typography>Make your choice</Typography>
            <Link to='users'>
                <Button>Users</Button>
            </Link>
            <Link to='roles'>
                <Button>Roles</Button>
            </Link>
        </Fragment>
    )
}

function Admin() {
    return (
        <Fragment>
            <Typography variant='h2'>admin</Typography>
            <Route to='users' component={AdminUsers} permissions={['readUsers']} />
            <Route to='roles' component={AdminRoles} permissions={['readRoles']} />
            <Route exact to='' component={AdminLandingPage} />
        </Fragment>
    )
}

export { Admin }
