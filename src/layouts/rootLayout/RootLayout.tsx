import { Outlet } from 'react-router-dom'
import { useLayout } from '@src/hooks'
import { MobileSidebar, Navbar, Sidebar } from '@src/layouts/rootLayout/components'
import { Button } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'

export const RootLayout = () => {
    const { sidebar, handleSidebar } = useLayout()

    return (
        <div id='root-layout' className='relative isolate flex min-h-svh w-full flex-col bg-background'>
            {/* <div
                className={`fixed inset-y-0 left-0 w-64 transition-transform duration-300 ease-in-out max-lg:hidden ${sidebar ? '' : '-left-full'}`}
            >
                <Sidebar />
            </div> */}
            <MobileSidebar open={sidebar} close={handleSidebar}>
                <Sidebar />
            </MobileSidebar>
            <header
                className={`shadow-large flex items-center justify-between px-4 transition-all duration-300 ease-in-out lg:shadow-none`}
            >
                <div className={`py-2.5 ${sidebar && 'invisible'}`}>
                    <Button size='xs' color='default' aria-label='Open navigation' onClick={handleSidebar}>
                        <Icon name='menu' size={18} />
                    </Button>
                </div>
                <div className='p-4 py-5 text-center font-primary text-xl font-bold [&>[data-slot=section]+[data-slot=section]]:mt-2.5'>
                    <h3>Logo</h3>
                </div>
                <div className='min-w-0'>
                    <Navbar />
                </div>
            </header>
            <main
                className={`flex flex-1 flex-col pb-2 transition-all duration-300 ease-in-out lg:min-w-0 lg:pr-2 lg:pt-2 ${sidebar ? 'lg:pl-80' : ''}`}
            >
                <div className='grow bg-default-50/60 p-6 lg:rounded-md lg:shadow-small'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
