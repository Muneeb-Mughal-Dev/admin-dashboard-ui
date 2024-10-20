import { Description, DescriptionProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownDescription = ({
    className,
    ...props
}: { className?: string } & Omit<DescriptionProps, 'as' | 'className'>) => {
    return (
        <Description
            data-slot='description'
            {...props}
            className={cn(
                className,
                'col-span-2 col-start-2 row-start-1 flex justify-end text-right text-sm/5 text-foreground/10 group-data-[focus]:text-primary-foreground sm:text-xs/5 forced-colors:group-data-[focus]:text-[HighlightText]',
            )}
        />
    )
}
