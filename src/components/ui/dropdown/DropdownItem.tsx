import { MenuItem } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { cn } from '@src/utils/styles'

export const DropdownItem = ({
  className,
  ...props
}: { className?: string } & (
  | Omit<React.ComponentPropsWithoutRef<'button'>, 'as' | 'className'>
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>
)) => {
  let classes = cn(
    'group col-span-full grid cursor-pointer grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center gap-1.5 rounded-sm px-3.5 py-2.5 text-left text-base/6 text-foreground forced-color-adjust-none focus:outline-none data-[focus]:bg-primary-active data-[focus]:text-primary-foreground data-[disabled]:opacity-50 supports-[grid-template-columns:subgrid]:grid-cols-subgrid sm:px-3 sm:py-1.5 sm:text-sm/6 forced-colors:text-[CanvasText] forced-colors:data-[focus]:bg-[Highlight] forced-colors:data-[focus]:text-[HighlightText] [&>[data-slot=avatar]]:-ml-1 [&>[data-slot=avatar]]:mr-2.5 [&>[data-slot=avatar]]:size-6 sm:[&>[data-slot=avatar]]:mr-2 sm:[&>[data-slot=avatar]]:size-5 [&>[data-slot=icon]]:col-start-1 [&>[data-slot=icon]]:row-start-1 [&>[data-slot=icon]]:-ml-0.5 [&>[data-slot=icon]]:mr-2.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:text-foreground [&>[data-slot=icon]]:data-[focus]:text-foreground sm:[&>[data-slot=icon]]:mr-2 [&>[data-slot=icon]]:sm:size-4 forced-colors:[&>[data-slot=icon]]:data-[focus]:text-[HighlightText]',
    className,
  )
  return (
    <MenuItem>
      {'to' in props ?
        <Link {...props} className={classes} />
      : <button type='button' {...props} className={classes} />}
    </MenuItem>
  )
}
