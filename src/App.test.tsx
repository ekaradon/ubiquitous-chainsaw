import { render, screen } from '@testing-library/react'

import App from './App'

const DEFAULT_USER = {
    permissions: ['isLogged'],
}

const DASHBOARD_USER = {
    permissions: ['isLogged', 'readDashboard'],
}

const ADMIN_USER = {
    permissions: ['isLogged', 'isAdmin'],
}

describe('Router', () => {
    test('As an unauthenticated user, I want to access the Login page', () => {
        render(<App location='/login' />)

        screen.getByText('login')
    })

    test('As an authenticated user, I want to access the Root page', () => {
        render(<App location='/' user={DEFAULT_USER} />)

        screen.getByText('home')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Dashboard page', () => {
        render(<App location='/dashboard' user={DASHBOARD_USER} />)

        screen.getByText('dashboard')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Admin page', () => {
        render(<App location='/admin' user={ADMIN_USER} />)

        screen.getByText('admin')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Users list page', () => {
        render(
            <App
                location='/admin/users/list'
                user={{
                    ...ADMIN_USER,
                    permissions: [...ADMIN_USER.permissions, 'readUsers'],
                }}
            />
        )

        screen.getByText('Users list')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Users edition page', () => {
        render(
            <App
                location='/admin/users/edit'
                user={{
                    ...ADMIN_USER,
                    permissions: [
                        ...ADMIN_USER.permissions,
                        'readUsers',
                        'editUsers',
                    ],
                }}
            />
        )

        screen.getByText('Users edition')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Roles list page', () => {
        render(
            <App
                location='/admin/roles/list'
                user={{
                    ...ADMIN_USER,
                    permissions: [...ADMIN_USER.permissions, 'readRoles'],
                }}
            />
        )

        screen.getByText('Roles list')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Roles edition page', () => {
        render(
            <App
                location='/admin/roles/edit'
                user={{
                    ...ADMIN_USER,
                    permissions: [
                        ...ADMIN_USER.permissions,
                        'readRoles',
                        'editRoles',
                    ],
                }}
            />
        )

        screen.getByText('Roles edition')
    })
})
