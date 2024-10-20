import { Link } from 'react-router-dom'
import { Button } from '@src/components/ui/button'

interface NavLinkProps {
    path: string
    title: string
}

export const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    return (
        <Button as={Link} size='sm' to={path} variant='outline' className='justify-between border-none text-foreground'>
            <span className='truncate text-sm font-semibold'>{title}</span>
        </Button>
    )
}
