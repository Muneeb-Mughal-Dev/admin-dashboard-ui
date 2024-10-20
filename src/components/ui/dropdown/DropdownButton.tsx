import { useEffect, useState } from 'react'
import { MenuButton, MenuButtonProps } from '@headlessui/react'
import { Button, ButtonStyles, DropDownButtonProps, buttonStyles } from '@src/components/ui/button'
import { cn } from '@src/utils/styles'

export function DropdownButton<T extends React.ElementType = typeof Button>({
  as,
  className,
  size = 'md',
  rounded = 'md',
  shadow = 'none',
  colors = 'primary',
  variant = 'solid',
  fullWidth = false,
  ...props
}: { className?: string } & DropDownButtonProps & Omit<MenuButtonProps<T>, 'className'>) {
  const [styles, setStyles] = useState<ButtonStyles | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchStyles = async () => {
      try {
        const computedStyles = await buttonStyles({ fullWidth, size, rounded, shadow, variant, colors })
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
  }, [fullWidth, size, rounded, shadow, variant, colors])

  const combinedClassNames = `${styles?.base} ${styles?.size} ${styles?.color} ${styles?.rounded} ${styles?.shadow} ${styles?.fullWidth} ${className}`

  return <MenuButton as={as} {...props} className={cn(combinedClassNames, className)} />
}
