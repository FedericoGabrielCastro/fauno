import type { FormEvent, ChangeEvent } from 'react'
import { usePublications } from '@/service/Publications/hooks/useContextProvider'
import { SpinnerLoader } from '@/components/SpinnerLoader'
import { useState } from 'react'

export const CreateNewPublication = () => {
    const { createPublication, createLoading, createError } = usePublications()

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (title.trim() === '') {
            setError('Title cannot be empty')
        } else {
            createPublication({
                title: title,
            })
            setTitle('')
            setError('')
        }
    }

    const submitButton = createLoading ? (
        <div className='w-2/12'>
            <SpinnerLoader />
        </div>
    ) : (
        <button type='submit' className='w-2/12 h-10 text-xs text-center text-white border-2 rounded-md border-primary bg-primary'>
            {' '}
            Create{' '}
        </button>
    )

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
        setError('')
    }

    return (
        <form className='flex items-center justify-center gap-1' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter a Title' className='w-10/12 p-2 border-2 rounded-md border-primary' value={title} onChange={handleInputChange} />
            {submitButton}
            {error && <p className='absolute text-xs text-red-500 translate-y-8'>{error}</p>}
        </form>
    )
}
