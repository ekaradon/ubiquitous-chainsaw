import { Typography } from '@mui/material'
import { Fragment } from 'react'

import { Route } from './Route'
import { AdminUsersEdit } from './AdminUsersEdit'
import { AdminUsersList } from './AdminUsersList'

function AdminUserLandingPage() {
    return (
        <Fragment>
            <Typography>Make your choice</Typography>
        </Fragment>
    )
}

function AdminUsers() {
    return (
        <Fragment>
            <Route exact to='' component={AdminUserLandingPage} />
            <Route to='list' component={AdminUsersList} />
            <Route to='edit' component={AdminUsersEdit} />
        </Fragment>
    )
}

export { AdminUsers }
