import { MenuItems, MenuItemsProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownMenu = ({
    anchor = 'bottom',
    className,
    ...props
}: { className?: string } & Omit<MenuItemsProps, 'as' | 'className'>) => {
    return (
        <MenuItems
            {...props}
            transition
            anchor={anchor}
            className={cn(
                'shadow-large isolate w-max overflow-y-auto rounded-md bg-default-200/15 p-1 outline outline-1 outline-transparent ring-1 ring-divider backdrop-blur-xl transition [--anchor-gap:theme(spacing.2)] [--anchor-padding:theme(spacing.1)] focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:duration-100 data-[leave]:ease-in data-[anchor~=start]:[--anchor-offset:-6px] data-[anchor~=end]:[--anchor-offset:6px] supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto] sm:data-[anchor~=start]:[--anchor-offset:-4px] sm:data-[anchor~=end]:[--anchor-offset:4px] dark:ring-inset',
                className,
            )}
        />
    )
}
