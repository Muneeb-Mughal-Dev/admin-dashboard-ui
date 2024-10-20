import type { ButtonStyleProps, ButtonStyles } from '@src/components/ui/button'
import { getColor } from '@src/utils/styles'

const sizeClasses = {
    xs: 'px-2 py-2 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
}

const roundedClasses = {
    xs: 'rounded',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
    none: 'rounded-none',
}
const shadowClasses = {
    sm: 'shadow-small',
    md: 'shadow-medium',
    lg: 'shadow-large',
    none: 'shadow-none',
}

export const buttonStyles = async ({
    size,
    rounded,
    shadow,
    variant,
    color,
    colors,
    fullWidth,
}: ButtonStyleProps): Promise<ButtonStyles> => {
    const base =
        'relative inline-flex border items-center justify-center gap-1.5 hover:gap-0.5 font-primary min-w-max overflow-hidden font-semibold cs-transition before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)]'
    const sizeClass = sizeClasses[size]
    const roundedClass = roundedClasses[rounded]
    const shadowClass = shadowClasses[shadow]
    const fullWidthClass = fullWidth ? 'w-full justify-center' : ''

    return {
        base,
        size: sizeClass,
        color: await getColor({ colors, color, variant }),
        rounded: roundedClass,
        shadow: shadowClass,
        fullWidth: fullWidthClass,
    }
}
