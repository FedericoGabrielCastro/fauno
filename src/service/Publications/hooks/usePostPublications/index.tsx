import { useEffect, useState } from 'react'
import axios from 'axios'

interface IUsePostPublications {
    id: string | Number
    title: string
}

export const usePostPublications = () => {
    const [createLoading, setCreateLoading] = useState(false)
    const [createError, setCreateError] = useState<Error | unknown>(null)

    const createPublication = async ({ title, id }: IUsePostPublications) => {
        setCreateLoading(true)

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
            })

            const newPublication = {
                id: id + 1,
                title,
            }

            setCreateLoading(false)
            return newPublication
        } catch (error) {
            setCreateError(error)
            setCreateLoading(false)
            throw error
        }
    }

    return { createPublication, createLoading, createError }
}
