import { MenuSeparator, MenuSeparatorProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownDivider = ({
  className,
  ...props
}: { className?: string } & Omit<MenuSeparatorProps, 'as' | 'className'>) => {
  return (
    <MenuSeparator
      {...props}
      className={cn(
        className,
        'col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 dark:bg-white/10 forced-colors:bg-[CanvasText]',
      )}
    />
  )
}
