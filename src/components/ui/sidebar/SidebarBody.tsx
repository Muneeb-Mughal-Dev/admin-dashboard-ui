import { motion as M } from 'framer-motion'
import { Desktop, Mobile } from '@src/components/ui/sidebar'

export const SidebarBody = (props: React.ComponentProps<typeof M.div>) => {
  return (
    <>
      <Desktop {...props} />
      <Mobile {...(props as React.ComponentProps<'div'>)} />
    </>
  )
}
