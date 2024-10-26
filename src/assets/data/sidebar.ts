import dynamicIconImports from 'lucide-react/dynamicIconImports'

export interface SidebarMenu {
  id: number
  title: string
  type?: 'menu' | 'submenu'
  path?: string
  menu?: SidebarMenu[]
  submenu?: MenuLinks[]
  icon: keyof typeof dynamicIconImports
}

export interface MenuLinks {
  id: number
  title: string
  path: string
  icon: keyof typeof dynamicIconImports
}

export const sidebar: SidebarMenu[] = [
  {
    id: 1,
    type: 'submenu',
    title: 'Dashboard',
    icon: 'blocks',
    submenu: [
      { id: 1, icon: 'monitor-up', title: 'Sales', path: '/sales' },
      { id: 2, icon: 'monitor-check', title: 'Analytics', path: '/analytics' },
      { id: 3, icon: 'dollar-sign', title: 'Finance', path: '/finance' },
      { id: 4, icon: 'currency', title: 'Crypto', path: '/crypto' },
    ],
  },
  {
    id: 2,
    type: 'menu',
    title: 'Apps',
    icon: 'app-window',
    menu: [
      { id: 1, icon: 'message-square', title: 'Chat', path: '/chat' },
      { id: 2, icon: 'mail', title: 'Mailbox', path: '/mailbox' },
      { id: 3, icon: 'list', title: 'Todo List', path: '/todo-list' },
      { id: 4, icon: 'notebook', title: 'Notes', path: '/notes' },
      { id: 5, icon: 'sailboat', title: 'Scrumboard', path: '/scrumboard' },
      { id: 6, icon: 'contact', title: 'Contacts', path: '/contacts' },
      {
        id: 7,
        type: 'submenu',
        title: 'Invoice',
        icon: 'receipt',
        submenu: [
          { id: 1, icon: 'list', title: 'List', path: '/list' },
          { id: 2, icon: 'view', title: 'Preview', path: '/preview' },
          { id: 3, icon: 'plus', title: 'Add', path: '/add' },
          { id: 4, icon: 'pencil', title: 'Edit', path: '/edit' },
        ],
      },
      { id: 8, icon: 'calendar-arrow-down', title: 'Calender', path: '/calender' },
    ],
  },
  { id: 3, icon: 'blocks', title: 'Dashboard', path: '/' },
]
