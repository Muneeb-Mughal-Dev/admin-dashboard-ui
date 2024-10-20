import { useId } from 'react'
import { LayoutGroup } from 'framer-motion'
import { ThemeToggler } from '@src/components/themeToggler/ThemeToggler'
import { Dropdown, DropdownButton } from '@src/components/ui/dropdown'
import { Icon } from '@src/components/ui/icon'
import { AccountDropdownMenu } from './AccountDropdown'

export const Navbar = () => {
    const id = useId()
    return (
        <nav className='flex flex-1 items-center gap-4 py-2.5'>
            <div aria-hidden='true' className='-ml-4 flex-1' />
            <LayoutGroup id={id}>
                <div className='flex items-center gap-3'>
                    <Dropdown>
                        <DropdownButton rounded='full' variant='outline' colors='default' size='xs'>
                            <Icon name='user-round' size={18} />
                        </DropdownButton>
                        <AccountDropdownMenu anchor='bottom end' />
                    </Dropdown>
                </div>
                <ThemeToggler />
            </LayoutGroup>
        </nav>
    )
}
