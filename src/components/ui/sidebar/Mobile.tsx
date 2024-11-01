import { AnimatePresence, motion as M } from 'framer-motion'
import { useSidebar } from '@src/hooks'
import { Button } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'
import { cn } from '@src/utils/styles'

export const Mobile = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  const { open, setOpen } = useSidebar()

  return (
    <div className='md:hidden' {...props}>
      <AnimatePresence>
        {open && (
          <M.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className={cn('fixed inset-0 z-[100] flex h-full w-full flex-col justify-between bg-background p-10', className)}
          >
            <Button size='xs' color='default' onClick={() => setOpen(!open)} className='absolute right-4 top-4 z-50'>
              <Icon name='x' size={22} />
            </Button>
            {children}
          </M.div>
        )}
      </AnimatePresence>
    </div>
  )
}
