import { useId } from 'react'
import { useTheme } from '@src/hooks'
import { Icon } from '@src/components/ui/icon'

export const ThemeToggler = () => {
  const id = useId()
  const { themeToggler, theme } = useTheme()

  return (
    <>
      <input type='checkbox' id={id} className='peer sr-only' onChange={themeToggler} checked={theme === 'dark'} />
      <div className='shadow-large before:[&>label]:shadow-large after:[&>label]:shadow-medium w-fit rounded-full border border-divider [&>label>span]:text-primary-foreground [&>label>span]:transition-all [&>label>span]:duration-300 first:[&>label>span]:text-primary peer-checked:first:[&>label>span]:text-warning [&>label]:relative [&>label]:isolate [&>label]:flex [&>label]:h-8 [&>label]:w-16 [&>label]:cursor-pointer [&>label]:items-center [&>label]:justify-center [&>label]:gap-4 [&>label]:px-1 before:[&>label]:absolute before:[&>label]:inset-0 before:[&>label]:-z-20 before:[&>label]:rounded-full before:[&>label]:bg-primary before:[&>label]:transition-all before:[&>label]:duration-300 after:[&>label]:absolute after:[&>label]:left-0 after:[&>label]:top-0 after:[&>label]:-z-10 after:[&>label]:h-8 after:[&>label]:w-8 after:[&>label]:rounded-full after:[&>label]:bg-background after:[&>label]:transition-all after:[&>label]:duration-200 after:[&>label]:ease-in-out hover:before:[&>label]:-inset-1 peer-checked:before:[&>label]:bg-default-100 peer-checked:after:[&>label]:translate-x-8 peer-checked:after:[&>label]:bg-primary'>
        <label htmlFor={id}>
          <span>
            <Icon name='sun' size={20} />
          </span>
          <span>
            <Icon name='moon' size={20} />
          </span>
        </label>
      </div>
    </>
  )
}
