import { useContext } from 'react'
import { PublicationsContext } from '../../provider'

export const usePublications = () => {
    const context = useContext(PublicationsContext)

    if (!context) throw new Error('usePublications must be used within a provider')

    return context
}
