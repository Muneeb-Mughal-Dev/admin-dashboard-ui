import { Label, LabelProps } from '@headlessui/react'
import { cn } from '@src/utils/styles'

export const DropdownLabel = ({ className, ...props }: { className?: string } & Omit<LabelProps, 'as' | 'className'>) => {
    return <Label {...props} data-slot='label' className={cn(className, 'col-start-2 row-start-1')} {...props} />
}
