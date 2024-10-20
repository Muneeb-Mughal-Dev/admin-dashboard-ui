import { MenuHeading, MenuHeadingProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
    return <div {...props} className={cn(className, 'col-span-5 px-3.5 pb-1 pt-2.5 sm:px-3')} />
}

export const DropdownHeading = ({ className, ...props }: { className?: string } & Omit<MenuHeadingProps, 'as' | 'className'>) => {
    return (
        <MenuHeading
            {...props}
            className={cn(
                className,
                'col-span-full grid grid-cols-[1fr,auto] gap-x-12 px-3.5 pb-1 pt-2 text-sm/5 font-medium text-zinc-500 sm:px-3 sm:text-xs/5 dark:text-zinc-400',
            )}
        />
    )
}
