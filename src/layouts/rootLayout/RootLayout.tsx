import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Logo, LogoIcon } from '@src/components/logo/logo'
import { Menu } from '@src/components/ui/menu'
import { Navbar } from '@src/components/ui/navbar'
import { Sidebar, SidebarBody, SidebarLink } from '@src/components/ui/sidebar'

export function RootLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className='mx-auto flex h-dvh w-full flex-1 flex-col overflow-hidden rounded-md border border-divider bg-background md:flex-row'>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
            {open ?
              <div className='px-2'>
                <Logo />
              </div>
            : <div className='px-2'>
                <LogoIcon />
              </div>
            }
            <Menu />
          </div>
          <div className='px-2'>
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '/',
                icon: (
                  <img
                    src='https://assets.aceternity.com/manu.png'
                    className='h-7 w-7 flex-shrink-0 rounded-full'
                    width={50}
                    height={50}
                    alt='Avatar'
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className='flex flex-1 flex-col'>
        <Navbar />
        <div className='border-1 flex h-full w-full flex-1 flex-col gap-2 rounded-tl-md border-divider bg-default-50/50 p-2 md:p-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
