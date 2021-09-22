import { Fragment } from 'react'
import { Typography } from '@mui/material'

import { Route } from './Route'
import { AdminUsers } from './AdminUsers'
import { AdminRoles } from './AdminRoles'

function Admin() {
    return (
        <Fragment>
            <Typography variant='h2'>admin</Typography>
            <Route to='users' component={AdminUsers} />
            <Route to='roles' component={AdminRoles} />
        </Fragment>
    )
}

export { Admin }
