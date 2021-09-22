import { createContext, useContext } from 'react'

function createStrictContext<T>(
    options: {
        errorMessage?: string
        name?: string
    } = { name: '' }
) {
    const Context = createContext<T | undefined>(undefined)
    Context.displayName = options.name // for DevTools

    function useStrictContext() {
        const context = useContext(Context)
        if (context === undefined) {
            throw new Error(options.errorMessage || `${options.name} Context Provider is missing`)
        }
        return context
    }

    return [Context.Provider, useStrictContext] as [React.Provider<T>, () => T]
}

export { createStrictContext }
