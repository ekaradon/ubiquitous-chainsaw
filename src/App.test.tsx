import { render, screen } from '@testing-library/react'

import App from './App'
import { ADMIN, END_USER, GUEST, READONLY_ADMIN, SUPER_ADMIN } from './User'

describe('Router', () => {
    test('As an unauthenticated user, I want to access the Login page', () => {
        render(<App location='/login' />)

        screen.getByText('login')
    })

    test('As an authenticated user, I want to access the Root page', () => {
        render(<App location='/' user={GUEST} />)

        screen.getByText('home')
    })

    test('As an anonymous, I should not have access to home', () => {
        render(<App location='/' />)

        expect(screen.queryByText('home')).not.toBeInTheDocument()
        screen.getByText('login')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Dashboard page', () => {
        render(<App location='/dashboard' user={END_USER} />)

        screen.getByText('dashboard')
    })

    test('As an user without any permissions, I should not have access to dashboard', () => {
        render(<App location='/dashboard' user={GUEST} />)

        expect(screen.queryByText('dashboard')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Admin page', () => {
        render(<App location='/admin' user={ADMIN} />)

        screen.getByText('admin')
    })

    test('As an end user, I should not have access to the Admin page', () => {
        render(<App location='/admin' user={END_USER} />)

        expect(screen.queryByText('admin')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Users list page', () => {
        render(<App location='/admin/users/list' user={READONLY_ADMIN} />)

        screen.getByText('Users list')
    })

    test('As an admin without any permissions, I should not have access the Users list page', () => {
        render(<App location='/admin/users/list' user={ADMIN} />)

        expect(screen.queryByText('Users list')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Users edition page', () => {
        render(<App location='/admin/users/edit' user={SUPER_ADMIN} />)

        screen.getByText('Users edition')
    })

    test('As a readonly admin, I should not have access to the Users edition page', () => {
        render(<App location='/admin/users/edit' user={READONLY_ADMIN} />)

        expect(screen.queryByText('Users edition')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Roles list page', () => {
        render(<App location='/admin/roles/list' user={READONLY_ADMIN} />)

        screen.getByText('Roles list')
    })

    test('As an admin without any permissions, I should not have access the Roles list page', () => {
        render(<App location='/admin/roles/list' user={ADMIN} />)

        expect(screen.queryByText('Roles list')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })

    test('As an authenticated user with the correct set of permissions, I want to access the Roles edition page', () => {
        render(<App location='/admin/roles/edit' user={SUPER_ADMIN} />)

        screen.getByText('Roles edition')
    })

    test('As a readonly admin, I should not have access to the Roles edition page', () => {
        render(<App location='/admin/roles/edit' user={READONLY_ADMIN} />)

        expect(screen.queryByText('Roles edition')).not.toBeInTheDocument()
        screen.getByText('fallback')
    })
})
