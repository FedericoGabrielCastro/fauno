import { useEffect, useState } from 'react'
import axios from 'axios'

export const UseFetchPublications = () => {
    const [fetchedPublications, setPublications] = useState([])
    const [fetchLoading, setLoading] = useState(true)
    const [fetchError, setError] = useState<Error | unknown>(null)

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPublications(response.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchPublications()
    }, [])

    return { fetchedPublications, fetchLoading, fetchError }
}
