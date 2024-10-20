import { Fragment } from 'react'
import { SidebarMenu } from '@src/assets/data/sidebar'
import {
    Dropdown,
    DropdownButton,
    DropdownDescription,
    DropdownDivider,
    DropdownItem,
    DropdownMenu,
} from '@src/components/ui/dropdown'
import { Icon } from '@src/components/ui/icon'

interface SubmenuProps {
    item: SidebarMenu
}

export const Submenu: React.FC<SubmenuProps> = ({ item }) => {
    return (
        <Dropdown>
            <DropdownButton size='sm' variant='outline' className='justify-between border-none text-foreground'>
                <span className='text-sm font-semibold'>{item.title}</span>
                <Icon name='chevron-right' size={16} />
            </DropdownButton>
            <DropdownMenu className='min-w-80 lg:min-w-64' anchor='right start'>
                {item.submenu?.map((submenu) => (
                    <Fragment key={submenu.id}>
                        <DropdownItem to={submenu.path}>
                            <span className='truncate text-sm font-semibold'>{submenu.title}</span>
                            <DropdownDescription>{submenu.title}</DropdownDescription>
                        </DropdownItem>
                        <DropdownDivider />
                    </Fragment>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
