import { Button } from '@src/components/ui/button'
import { cn } from '@src/utils/styles'

export const NavTitle = ({ title, className }: { title: string; className?: string }) => {
  return (
    <Button
      size='xs'
      color='default'
      className={cn(
        `pointer-events-none justify-start border-opacity-25 bg-opacity-25 text-sm/4 font-semibold text-opacity-70`,
        className,
      )}
    >
      {title}
    </Button>
  )
}
