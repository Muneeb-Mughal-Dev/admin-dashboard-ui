import { Button } from '@src/components/ui/button'

export const NavTitle = ({ title }: { title: string }) => {
    return (
        <Button
            size='xs'
            color='default'
            className='pointer-events-none justify-start border-opacity-25 bg-opacity-25 text-sm/4 font-semibold text-opacity-70'
        >
            {title}
        </Button>
    )
}
