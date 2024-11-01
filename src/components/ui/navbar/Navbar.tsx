import { useId } from 'react'
import { LayoutGroup } from 'framer-motion'
import { ThemeToggler } from '@src/components/themeToggler/ThemeToggler'
import { Button } from '@src/components/ui/button'
import { Dropdown, DropdownButton } from '@src/components/ui/dropdown'
import { Icon } from '@src/components/ui/icon'
import { Account } from '@src/components/ui/user'

interface NavbarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export const Navbar: React.FC<NavbarProps> = ({ open, setOpen }) => {
  const id = useId()

  return (
    <nav className='flex items-center gap-4 border-b-2 border-divider px-2 py-2.5'>
      <Button size='xs' onClick={() => setOpen(!open)} color='default' className='ml-auto'>
        <Icon name='menu' size={22} />
      </Button>
      <div aria-hidden='true' className='flex-1' />
      <LayoutGroup id={id}>
        <div className='flex items-center gap-3'>
          <Dropdown>
            <DropdownButton rounded='full' variant='outline' colors='default' size='xs'>
              <Icon name='user-round' size={18} />
            </DropdownButton>
            <Account anchor='bottom end' />
          </Dropdown>
        </div>
        <ThemeToggler />
      </LayoutGroup>
    </nav>
  )
}
