import { Typography } from '@mui/material'
import { Fragment } from 'react'

import { Route } from './Route'
import { AdminRolesList } from './AdminRolesList'
import { AdminRolesEdit } from './AdminRolesEdit'

function AdminRolesLandingPage() {
    return (
        <Fragment>
            <Typography>Make your choice</Typography>
        </Fragment>
    )
}

function AdminRoles() {
    return (
        <Fragment>
            <Route exact to='' component={AdminRolesLandingPage} />
            <Route to='list' component={AdminRolesList} />
            <Route to='edit' component={AdminRolesEdit} permissions={['editRoles']} />
        </Fragment>
    )
}

export { AdminRoles }
