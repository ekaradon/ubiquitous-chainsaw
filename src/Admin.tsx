import { Fragment } from 'react'
import { Typography } from '@mui/material'

import { Route } from './Route'
import { AdminUsers } from './AdminUsers'
import { AdminRoles } from './AdminRoles'

function Admin() {
    return (
        <Fragment>
            <Typography variant='h2'>admin</Typography>
            <Route to='users' component={AdminUsers} permissions={['readUsers']} />
            <Route to='roles' component={AdminRoles} permissions={['readRoles']} />
        </Fragment>
    )
}

export { Admin }
