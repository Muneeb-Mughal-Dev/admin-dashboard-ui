import { useState } from 'react'
import { AnimatePresence, motion as M } from 'framer-motion'
import { Button } from '../button'

const ButtonParentVariants = {
  closed: {
    height: 0,
    transition: {
      duration: '1',
    },
  },
  open: {
    height: 'fit-content',
    transition: {
      when: 'beforeChildren',
      duration: '1',
      delayChildren: '1',
    },
  },
}

const ChildVariants = {
  closed: {
    opacity: '0',
    height: 0,
  },
  open: {
    opacity: '1',
    height: 'fit-content',
    transition: {
      //   delay: '1',
      duration: '1',
    },
  },
  exit: {
    opacity: '0',
    height: 0,
    // x: "-100vh",
    // delay: "4"
  },
}

export const DropDown = () => {
  const [open, toggleOpen] = useState(false)

  return (
    <div>
      <AnimatePresence>
        <M.div key='parent' variants={ButtonParentVariants} initial='closed' animate={open ? 'open' : 'closed'}>
          <Button
            onClick={() => {
              toggleOpen(!open)
            }}
          >
            Expand!
          </Button>

          {open && (
            <M.div key='child' variants={ChildVariants} initial='closed' animate={open ? 'open' : 'closed'} exit='exit'>
              <Button>Dark!</Button>
              <Button>Light!</Button>
            </M.div>
          )}

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus cumque officiis libero! Ut nemo, hic ratione
            dolorem iusto, repellendus minima ducimus facilis iste impedit labore ipsum accusantium. Aliquid, eum?
          </p>
        </M.div>
      </AnimatePresence>
    </div>
  )
}
