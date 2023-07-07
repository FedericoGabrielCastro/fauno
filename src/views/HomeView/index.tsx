import { CreateNewPublication } from '@/components/CreateNewPublication'
import { PublicationsTable } from '@/components/PublicationsTable'
import { usePublications } from '@/service/Publications/hooks/useContextProvider'
import { SpinnerLoader } from '@/components/SpinnerLoader'

export interface ITableHeader {
    title: string
    porcent: number
}

export const HomeView = () => {
    const { visiblePublications, fetchLoading, fetchError } = usePublications()

    const tableHeaders: ITableHeader[] = [
        { title: 'ID', porcent: 5 },
        { title: 'Status', porcent: 5 },
        { title: 'Title', porcent: 85 },
        { title: 'Action', porcent: 5 },
    ]

    if (fetchLoading === true) return <SpinnerLoader />

    const sads  = visiblePublications.clima

    return (
        <section className='flex flex-col h-full gap-10 '>
            <CreateNewPublication />
            <PublicationsTable publications={visiblePublications} tableHeaders={tableHeaders} />
        </section>
    )
}
