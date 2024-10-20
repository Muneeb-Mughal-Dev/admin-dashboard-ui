import { motion as M } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to='/' className='relative z-20 flex items-center space-x-2 py-1 font-primary text-foreground'>
      <div className='h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-foreground' />
      <M.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='whitespace-pre font-semibold text-foreground'>
        Logo
      </M.span>
    </Link>
  )
}
export const LogoIcon = () => {
  return (
    <Link to='/' className='relative z-20 flex items-center space-x-2 py-1 font-primary text-foreground'>
      <div className='h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-foreground' />
    </Link>
  )
}
