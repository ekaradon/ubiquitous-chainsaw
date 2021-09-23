import { createStrictContext } from './Context'

type RouterContext = {
    location: string
    setUrl: (newLocation: string) => void
}

const [RouterProvider, useRouter] = createStrictContext<RouterContext>({
    errorMessage: 'No Router context provided.',
})

export { RouterProvider, useRouter }
