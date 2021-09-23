import { Button, Typography } from '@mui/material'
import { Fragment } from 'react'
import { writeStorage } from '@rehooks/local-storage'

import { ADMIN, END_USER, GUEST, READONLY_ADMIN, SUPER_ADMIN, User } from './User'
import { useAuth } from './Auth.context'
import { Redirect } from './Redirect'

type SetUserProps = {
    name: string
    user: User
}

function SetUser({ name, user }: SetUserProps) {
    return <Button onClick={() => writeStorage('user', user)}>{name}</Button>
}

function Login() {
    const { user } = useAuth()

    if (user) {
        return <Redirect to='/' />
    }

    return (
        <Fragment>
            <Typography variant='h2'>login</Typography>
            <SetUser name='Guest' user={GUEST} />
            <SetUser name='End User' user={END_USER} />
            <SetUser name='Basic Admin' user={ADMIN} />
            <SetUser name='Readonly Admin' user={READONLY_ADMIN} />
            <SetUser name='Super Admin' user={SUPER_ADMIN} />
        </Fragment>
    )
}

export { Login }
