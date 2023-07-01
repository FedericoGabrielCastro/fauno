import type { ReactNode } from 'react'

interface IFContainer {
    children: ReactNode
}

export const FContainer = ({ children }: IFContainer) => {
    return <div className='w-full h-full p-5'>{children}</div>
}
