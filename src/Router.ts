import { createStrictContext } from './Context'

type RouterContext = {
    history: string[]
    location: string
}

const [RouterProvider, useRouter] = createStrictContext<RouterContext>({
    errorMessage: 'No Router context provided.',
})

export { RouterProvider, useRouter }
