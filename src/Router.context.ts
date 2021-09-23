import { Dispatch, SetStateAction } from 'react'
import { createStrictContext } from './Context'

type RouterContext = {
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}

const [RouterProvider, useRouter] = createStrictContext<RouterContext>({
    errorMessage: 'No Router context provided.',
})

export { RouterProvider, useRouter }
