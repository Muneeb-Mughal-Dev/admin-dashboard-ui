import { MenuSection, MenuSectionProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownSection = ({ className, ...props }: { className?: string } & Omit<MenuSectionProps, 'as' | 'className'>) => {
    return (
        <MenuSection
            {...props}
            className={cn(
                className,
                // Define grid at the section level instead of the item level if subgrid is supported
                'col-span-full supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]',
            )}
        />
    )
}
