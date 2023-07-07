'use client'

import ReactPaginate from 'react-paginate'
import { usePublications } from '@/service/Publications/hooks/useContextProvider'
import { SpinnerLoader } from '@/components/SpinnerLoader'

export const FFooter = () => {
    const { publications, fetchLoading, itemsPerPage, handlePageChange } = usePublications()

    if (fetchLoading === true) return <SpinnerLoader />

    return (
        <footer className='h-[10vh] flex items-center justify-center mt-auto'>
            <ReactPaginate
                className='flex gap-2'
                pageCount={Math.ceil(publications.length / itemsPerPage)} // Calcular el número total de páginas
                onPageChange={handlePageChange} // Función para manejar el cambio de página
                containerClassName='pagination'
                activeClassName='active'
            />
        </footer>
    )
}
