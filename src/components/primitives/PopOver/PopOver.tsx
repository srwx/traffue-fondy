import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { Cross2Icon } from '@radix-ui/react-icons'

interface PopOverProps {
  children: React.ReactNode
  popContent: React.ReactNode
}

const PopOver = (props: PopOverProps) => {
  const { children, popContent } = props

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          {children}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent relative" sideOffset={2}>
          <Popover.Close
            className="PopoverClose absolute top-3 right-3"
            aria-label="Close"
          >
            <Cross2Icon />
          </Popover.Close>
          {popContent}
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopOver
