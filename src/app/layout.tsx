import '@/styles/globals.css'
import { FNavbar } from '@/layout/FNavbar'
import { FFooter } from '@/layout/FFooter'
import { PublicationsProvider } from '@/service/Publications/provider'

export const metadata = {
    title: 'Fauno Challanger',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <PublicationsProvider>
                    <FNavbar />
                    {children}
                    <FFooter />
                </PublicationsProvider>
            </body>
        </html>
    )
}
