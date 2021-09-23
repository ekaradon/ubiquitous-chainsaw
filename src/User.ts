type Permission = 'isLogged' | 'readDashboard' | 'isAdmin' | 'readUsers' | 'editUsers' | 'readRoles' | 'editRoles'

type User = {
    permissions: Permission[]
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
    permissions: [...ADMIN.permissions, 'readUsers', 'readRoles'],
}

const SUPER_ADMIN: User = {
    permissions: [...READONLY_ADMIN.permissions, 'editUsers', 'editRoles'],
}


export type { User, Permission }
export { GUEST, END_USER, ADMIN, READONLY_ADMIN, SUPER_ADMIN }
