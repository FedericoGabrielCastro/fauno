'use client'

import type { ReactNode } from 'react'
import { createContext, useEffect, useState } from 'react'
import { UseFetchPublications } from './hooks/useFetchPublications'
import { usePostPublications } from './hooks/usePostPublications'
import { useUpdatePublications } from './hooks/useUpdatePublications'

interface IPublicationsProvider {
    children: ReactNode
}

export const PublicationsContext = createContext([])

export const PublicationsProvider = ({ children }: IPublicationsProvider) => {
    const [publications, setPublications] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const itemsPerPage = 20

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const visiblePublications = publications.slice(startIndex, endIndex)

    const { fetchedPublications, fetchLoading, fetchError } = UseFetchPublications()
    const { createPublication, createLoading, createError } = usePostPublications()
    const { updatePublication, updateLoading, updateError } = useUpdatePublications()

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    useEffect(() => {
        if (fetchedPublications.length > 0) {
            setPublications(fetchedPublications)
        }
    }, [fetchedPublications, setPublications])

    const handleCreatePublication = async ({ title }: { title: string }) => {
        try {
            const newPublication = await createPublication({ title: title, id: publications.length })
            setPublications([...publications, newPublication])
        } catch (error) {
            console.error(error)
        }
    }

    const handleUpdatePublication = async (id: number, title: string) => {
        try {
            const updatedPublication = await updatePublication(id, title)
            const updatedPublications = publications.map((publication) => (publication.id === id ? { ...publication, title: updatedPublication.title } : publication))
            setPublications(updatedPublications)
        } catch (error) {
            console.error(error)
        }
    }

    const value = {
        handlePageChange,
        itemsPerPage,
        visiblePublications,
        publications,
        fetchLoading,
        fetchError,
        createPublication: handleCreatePublication,
        createLoading,
        createError,
        updatePublication: handleUpdatePublication,
        updateLoading,
        updateError,
    }

    return <PublicationsContext.Provider value={value}>{children}</PublicationsContext.Provider>
}
