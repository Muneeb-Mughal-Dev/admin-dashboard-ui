import { Fragment, useId } from 'react'
import { sidebar } from '@src/assets/data/sidebar'
import { LayoutGroup } from 'framer-motion'
import { NavLink, NavTitle, Submenu } from '@src/layouts/rootLayout/components'

export const Sidebar = () => {
    let id = useId()

    return (
        <aside className='flex h-full min-h-0 flex-col'>
            {/* <div className='flex flex-col border-b border-divider p-4 py-5 text-center font-primary text-xl font-bold max-lg:hidden [&>[data-slot=section]+[data-slot=section]]:mt-2.5'>
                Logo
            </div> */}
            <div className='flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'>
                <LayoutGroup id={id}>
                    <div data-slot='section' className='flex flex-col gap-1.5'>
                        {sidebar.map((item) =>
                            item.type === 'submenu' ? <Submenu key={item.id} item={item} />
                            : item.type === 'menu' ?
                                <Fragment key={item.id}>
                                    <NavTitle title={item.title} />
                                    {item.menu?.map((menu) =>
                                        menu.type === 'submenu' ?
                                            <Fragment key={menu.id}>
                                                <Submenu item={menu} />
                                            </Fragment>
                                        :   <Fragment key={menu.id}>
                                                <NavLink path={menu.path ?? ''} title={menu.title} />
                                            </Fragment>,
                                    )}
                                </Fragment>
                            :   <NavLink key={item.id} path={item.path ?? ''} title={item.title} />,
                        )}
                    </div>
                </LayoutGroup>
            </div>
        </aside>
    )
}
