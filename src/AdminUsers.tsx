import { Button, Typography } from '@mui/material'
import { Fragment } from 'react'

import { Link } from './Link'
import { Route } from './Route'
import { AdminUsersEdit } from './AdminUsersEdit'
import { AdminUsersList } from './AdminUsersList'

function AdminUserLandingPage() {
    return (
        <Fragment>
            <Typography>Make your choice</Typography>
            <Link to='list'>
                <Button>List</Button>
            </Link>
            <Link to='edit'>
                <Button>Edit</Button>
            </Link>
        </Fragment>
    )
}

function AdminUsers() {
    return (
        <Fragment>
            <Route exact to='' component={AdminUserLandingPage} />
            <Route to='list' component={AdminUsersList} />
            <Route to='edit' component={AdminUsersEdit} permissions={['editUsers']} />
        </Fragment>
    )
}

export { AdminUsers }
