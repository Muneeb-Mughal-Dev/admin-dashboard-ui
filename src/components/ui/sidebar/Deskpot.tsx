import { motion as M } from 'framer-motion'
import { useSidebar } from '@src/hooks'
import { cn } from '@src/utils/styles'

export const Desktop = ({ className, children, ...props }: React.ComponentProps<typeof M.div>) => {
  const { open, setOpen, animate } = useSidebar()

  return (
    <M.div
      className={cn('hidden h-full w-[300px] flex-shrink-0 bg-default-50/30 px-2 py-4 md:flex md:flex-col', className)}
      animate={{
        width:
          animate ?
            open ? '300px'
            : '60px'
          : '300px',
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </M.div>
  )
}
