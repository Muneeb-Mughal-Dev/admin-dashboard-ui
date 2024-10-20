import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Button } from '@src/components/ui/button'
import { Icon } from '@src/components/ui/icon'

interface MobileSidebarProps extends React.PropsWithChildren {
    open: boolean
    close: () => void
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ open, close, children }) => {
    return (
        <Dialog open={open} onClose={close}>
            <DialogBackdrop
                transition
                className='fixed inset-0 bg-green-500 backdrop-blur-[1px] transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
            />
            <DialogPanel
                transition
                className='fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-[closed]:-translate-x-full lg:hidden'
            >
                <div className='shadow-large flex h-full flex-col rounded-md bg-background ring-1 ring-divider'>
                    <div className='px-4 pt-3'>
                        <Button size='xs' color='default' onClick={close} className='p-1' aria-label='Close navigation'>
                            <Icon name='chevron-left' size={20} />
                        </Button>
                    </div>
                    {children}
                </div>
            </DialogPanel>
        </Dialog>
    )
}
