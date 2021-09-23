type User = {
    permissions: string[]
}

const GUEST: User = {
    permissions: ['isLogged'],
}

const END_USER: User = {
    permissions: [...GUEST.permissions, 'readDashboard'],
}

const ADMIN: User = {
    permissions: [...END_USER.permissions, 'isAdmin'],
}

const READONLY_ADMIN: User = {
    permissions: [...ADMIN.permissions, 'readUsers', 'editUsers'],
}

const SUPER_ADMIN: User = {
    permissions: [...READONLY_ADMIN.permissions, 'editUsers', 'editRoles'],
}


export type { User }
export { GUEST, END_USER, ADMIN, READONLY_ADMIN, SUPER_ADMIN }
