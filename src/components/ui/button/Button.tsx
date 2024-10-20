import { useEffect, useId, useRef, useState } from 'react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import loading from '@src/assets/icons/spinning-circles.svg'
import { buttonStyles } from '@src/components/ui/button'
import type { ButtonProps, ButtonStyles } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'
import { Image } from '@src/components/ui/image'
import { cn, ripple as rippleEffect } from '@src/utils/styles'

export const Button = <T extends ElementType = 'button'>({
    as,
    icon,
    onClick,
    children,
    size = 'md',
    className,
    rippleColor,
    shadow = 'none',
    disableRipple,
    rounded = 'md',
    color = 'primary',
    variant = 'solid',
    type = 'button',
    disabled = false,
    isLoading = false,
    fullWidth = false,
    iconPlacement = 'start',
    ...rest
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
    const Component = as || 'button'
    const id = useId()
    const btnRef = useRef<HTMLButtonElement>(null)
    const [styles, setStyles] = useState<ButtonStyles | null>(null)

    useEffect(() => {
        let isMounted = true

        const fetchStyles = async () => {
            try {
                const computedStyles = await buttonStyles({ fullWidth, size, rounded, shadow, variant, color })
                if (isMounted) {
                    setStyles(computedStyles)
                }
            } catch (error) {
                console.error('Error fetching button styles:', error)
            }
        }

        fetchStyles()

        return () => {
            isMounted = false
        }
    }, [fullWidth, size, rounded, shadow, variant, color])

    const combinedClassNames = `${styles?.base} ${styles?.size} ${styles?.color} ${styles?.rounded} ${styles?.shadow} ${styles?.fullWidth} ${className}`

    const rippleClr = rippleColor ? rippleColor : 'bg-white/30'

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        rippleEffect(e, btnRef, rippleClr)
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <Component
            id={`button-${id}`}
            ref={Component === 'button' ? btnRef : undefined}
            disabled={disabled}
            onClick={handleClick}
            type={Component === 'button' ? type : undefined}
            {...rest}
            className={cn(combinedClassNames, className)}
        >
            {icon && iconPlacement === 'start' && <Icon name={icon} size={14} />}
            {isLoading && iconPlacement === 'start' && <Image src={loading} alt='loading...' className='w-4' />}
            {children}
            {icon && iconPlacement === 'end' && <Icon name={icon} size={14} />}
            {isLoading && iconPlacement === 'end' && <Image src={loading} alt='loading...' className='w-4' />}
        </Component>
    )
}
