import { useState } from 'react'
import axios from 'axios'

export const useUpdatePublications = () => {
    const [updateLoading, setUpdateLoading] = useState(false)
    const [updateError, setUpdateError] = useState<Error | unknown>(null)

    const updatePublication = async (id: number, title: string) => {
        setUpdateLoading(true)

        try {
            //   const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            //     title,
            //   });

            setUpdateLoading(false)
            //   return response.data;
        } catch (error) {
            setUpdateError(error)
            setUpdateLoading(false)
            throw error
        }
    }

    return { updatePublication, updateLoading, updateError }
}
