import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

type Title = {
    title: string
    children: ReactNode
}

const Layout: FC<Title> = ({ children, title = 'Todo app' }) => {
    return (
        <div className="text-grya-800 flex min-h-screen flex-col items-center justify-center font-mono">
            <Head>{title}</Head>
            <header></header>
            <main className="flex w-screen flex-1 flex-col items-center justify-center">
                {children}
            </main>
            <footer className="flex h-12 w-full items-center justify-center border-t">
                <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
            </footer>
        </div>
    )
}

export default Layout
