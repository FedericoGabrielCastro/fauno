import type { ChangeEvent } from 'react'
import { useState } from 'react'

interface INewTitle {
    newTitle: ChangeEvent<HTMLInputElement> | string
    title: string
}

interface IPublicationInputProps {
    title: string
    enabled: boolean
    handleConfirmEdit: (id: string) => void
    onChange: (newTitle: string) => void
    handleCancel: any
}

export const PublicationInput = ({ title, enabled, onChange, handleConfirmEdit, handleCancel }: IPublicationInputProps) => {
    const [textEditing, setTextEditing] = useState<string>(title)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newTitle: INewTitle = { newTitle: event.target.value, title: title }

        onChange(newTitle)
        setTextEditing(event.target.value)
    }

    const handleBlur = () => {
        if (textEditing === '') setTextEditing(title)
        handleConfirmEdit
        handleCancel(false)
    }

    return (
        <input className={`w-full outline-none ${enabled ? 'bg-gray-400 ' : null} `} type='text' value={textEditing} disabled={!enabled} onChange={handleChange} onBlur={handleBlur} placeholder='' />
    )
}
