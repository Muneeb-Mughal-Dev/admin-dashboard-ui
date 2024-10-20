import { Fragment, useId } from 'react'
import { sidebar } from '@src/assets/data/sidebar'
import { LayoutGroup } from 'framer-motion'
import { useSidebar } from '@src/hooks'
import { Submenu } from '@src/components/ui/menu'
import { NavLink, NavTitle } from '@src/components/ui/navbar'

export const Menu = () => {
  let id = useId()
  const { open, animate } = useSidebar()

  return (
    <aside className='flex h-full min-h-0 flex-col pt-10'>
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden [&>[data-slot=section]+[data-slot=section]]:mt-8'>
        <LayoutGroup id={id}>
          <div data-slot='section' className='flex flex-col gap-1.5'>
            {sidebar.map((item) =>
              item.type === 'submenu' ? <Submenu key={item.id} item={item} />
              : item.type === 'menu' ?
                <Fragment key={item.id}>
                  <NavTitle title={item.title} className={!open && animate ? 'hidden' : ''} />
                  {item.menu?.map((menu) =>
                    menu.type === 'submenu' ?
                      <Fragment key={menu.id}>
                        <Submenu item={menu} />
                      </Fragment>
                    : <Fragment key={menu.id}>
                        <NavLink path={menu.path!} title={menu.title} />
                      </Fragment>,
                  )}
                </Fragment>
              : <NavLink key={item.id} path={item.path!} title={item.title} />,
            )}
          </div>
        </LayoutGroup>
      </div>
    </aside>
  )
}
