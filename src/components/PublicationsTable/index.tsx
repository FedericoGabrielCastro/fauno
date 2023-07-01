import { useState } from 'react'
import { TableEditButton } from './TableEditButton'
import { PublicationInput } from './TitleInputTd'
import { useUpdatePublications } from '@/service/Publications/hooks/useUpdatePublications'

interface ITableHeader {
    title: string
    porcent: number
}

interface IPublicationsTable {
    publications: any
    tableHeaders: ITableHeader[]
}

export const PublicationsTable = ({ publications, tableHeaders }: IPublicationsTable) => {
    const { updatePublication, updateLoading, updateError } = useUpdatePublications()

    const [enabledInputId, setEnabledInputId] = useState<string | null>(null)
    const [editedTitles, setEditedTitles] = useState<{ [id: string]: string }>({})
    const [buttonDisable, setButtonDisable] = useState<boolean>(false)

    const handleEditButtonClick = (id: string) => {
        setEnabledInputId(id)
    }

    const handleConfirmEdit = async (id: string) => {
        if (editedTitles.hasOwnProperty(id)) {
            try {
                await updatePublication(id, editedTitles[id])
            } catch (error) {
                console.error(error)
            }
        }
        setEnabledInputId(null)
    }

    const handleInputChange = (id: string, newTitle: any) => {
        if (newTitle.newTitle === '') {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }

        setEditedTitles((prevEditedTitles) => ({
            ...prevEditedTitles,
            [id]: newTitle.newTitle,
        }))
    }

    const handleCancel = () => {
        setButtonDisable(false)
        setEnabledInputId('')
    }

    return (
        <table className='w-full'>
            <thead className='text-white bg-primary'>
                <tr>
                    {tableHeaders.map((header, index) => (
                        <th key={index} className={`w-[${header.porcent}%] border-2 border-black px-1`}>
                            {header.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {publications.map((publication: any) => (
                    <tr key={publication.id} className='border-2 border-primary'>
                        <td className='p-0.5 text-center'>{publication.id}</td>
                        <td className='text-center border-2 border-primary'>status</td>
                        <td className={`text-center `}>
                            <PublicationInput
                                handleConfirmEdit={handleConfirmEdit}
                                handleCancel={setButtonDisable}
                                title={publication.title}
                                enabled={enabledInputId === publication.id}
                                onChange={(newTitle: any) => handleInputChange(publication.id, newTitle)}
                            />
                        </td>
                        <td className='text-center border-2 border-primary'>
                            <TableEditButton
                                handleConfirmEdit={handleConfirmEdit}
                                handleCancel={handleCancel}
                                publicationId={publication.id}
                                handleEditButtonClick={handleEditButtonClick}
                                buttonDisable={enabledInputId === publication.id ? buttonDisable : false}
                                enabledInputId={enabledInputId}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
