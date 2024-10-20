export interface SidebarMenu {
  id: number
  title: string
  type?: 'menu' | 'submenu'
  path?: string
  menu?: SidebarMenu[]
  submenu?: MenuLinks[]
}

export interface MenuLinks {
  id: number
  title: string
  path: string
}

export const sidebar: SidebarMenu[] = [
  {
    id: 1,
    type: 'submenu',
    title: 'Dashboard',
    submenu: [
      { id: 1, title: 'Sales', path: '/sales' },
      { id: 2, title: 'Analytics', path: '/analytics' },
      { id: 3, title: 'Finance', path: '/finance' },
      { id: 4, title: 'Crypto', path: '/crypto' },
    ],
  },
  {
    id: 2,
    type: 'menu',
    title: 'Apps',
    menu: [
      { id: 1, title: 'Chat', path: '/chat' },
      { id: 2, title: 'Mailbox', path: '/mailbox' },
      { id: 3, title: 'Todo List', path: '/todo-list' },
      { id: 4, title: 'Notes', path: '/notes' },
      { id: 5, title: 'Scrumboard', path: '/scrumboard' },
      { id: 6, title: 'Contacts', path: '/contacts' },
      {
        id: 7,
        type: 'submenu',
        title: 'Invoice',
        submenu: [
          { id: 1, title: 'List', path: '/list' },
          { id: 2, title: 'Preview', path: '/preview' },
          { id: 3, title: 'Add', path: '/add' },
          { id: 4, title: 'Edit', path: '/edit' },
        ],
      },
      { id: 8, title: 'Calender', path: '/calender' },
    ],
  },
  { id: 3, title: 'Dashboard', path: '/' },
]
