'use client'
export const FNavbar = () => {
    const handleRestart = () => {
        window.location.reload()
    }

    return (
        <section className='flex items-center justify-between h-[5vh] px-5 text-white bg-primary'>
            <p>Fauno Challanger</p>
            <button className='p-2 text-sm text-black rounded-md bg-secondary' onClick={handleRestart}>
                {' '}
                RESTART{' '}
            </button>
        </section>
    )
}
