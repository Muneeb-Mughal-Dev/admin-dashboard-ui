import { type ReactNode } from 'react'
import { ModalProvider } from '@src/components/ui/modal'

export function Modal({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>
}

// const CloseIcon = () => {
//   const { setOpen } = useModal()
//   return (
//     <button onClick={() => setOpen(false)} className='group absolute right-4 top-4'>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         width='24'
//         height='24'
//         viewBox='0 0 24 24'
//         fill='none'
//         stroke='currentColor'
//         strokeWidth='2'
//         strokeLinecap='round'
//         strokeLinejoin='round'
//         className='h-4 w-4 text-black transition duration-200 group-hover:rotate-3 group-hover:scale-125 dark:text-white'
//       >
//         <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//         <path d='M18 6l-12 12' />
//         <path d='M6 6l12 12' />
//       </svg>
//     </button>
//   )
// }
