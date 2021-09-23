import { Dispatch, SetStateAction } from 'react'

import { createStrictContext } from './Context'
import { User } from './User'

type AuthContext = {
    user: User | null
    setUser: Dispatch<SetStateAction<User | null>>
}

const [AuthProvider, useAuth] = createStrictContext<AuthContext>({
    errorMessage: 'No Auth context provided.',
})

export { AuthProvider, useAuth }
