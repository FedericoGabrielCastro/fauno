import type { ReactNode } from 'react'
import { FContainer } from '../FContainer'

interface IFMain {
    children: ReactNode
}

export const FMain = ({ children }: IFMain) => {
    return (
        <main className='h-[85vh]'>
            <FContainer>{children}</FContainer>
        </main>
    )
}
