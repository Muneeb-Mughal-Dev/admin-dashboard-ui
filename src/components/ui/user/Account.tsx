import { DropdownDescription, DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '@src/components/ui/dropdown'
import { Icon } from '@src/components/ui/icon'

export const Account = ({ anchor }: { anchor: 'top start' | 'bottom end' }) => {
  return (
    <DropdownMenu className='min-w-64' anchor={anchor}>
      <DropdownItem>
        <DropdownLabel>My account</DropdownLabel>
        <DropdownDescription>
          <Icon name='square-user' size={18} />
        </DropdownDescription>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem to='#'>
        <DropdownLabel>Privacy policy</DropdownLabel>
        <DropdownDescription>
          <Icon name='shield' size={18} />
        </DropdownDescription>
      </DropdownItem>
      <DropdownItem to='#'>
        <DropdownLabel>Share feedback</DropdownLabel>
        <DropdownDescription>
          <Icon name='lightbulb' size={18} />
        </DropdownDescription>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem>
        <DropdownLabel>Sign out</DropdownLabel>
        <DropdownDescription>
          <Icon name='log-out' size={18} />
        </DropdownDescription>
      </DropdownItem>
    </DropdownMenu>
  )
}
