import { ReactNode } from 'react'

export interface Links {
  href: string
  label: string
  icon?: React.JSX.Element | React.ReactNode
}

export interface SidebarContextProps {
  open: boolean
  animate: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface SidebarProviderProps {
  open?: boolean
  animate?: boolean
  children: ReactNode
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}
