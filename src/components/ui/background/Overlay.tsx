import { motion as M } from 'framer-motion'
import { cn } from '@src/utils/styles'

export const Overlay = ({ className }: { className?: string }) => {
  return (
    <M.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: 'blur(10px)',
      }}
      exit={{
        opacity: 0,
        backdropFilter: 'blur(0px)',
      }}
      className={cn(`fixed inset-0 z-50 h-full w-full bg-black bg-opacity-50`, className)}
    />
  )
}
