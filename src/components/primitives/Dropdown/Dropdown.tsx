import React, { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { ChevronDownIcon } from '@/icons'

interface DropdownSelectionProps {
  placeholder: string
  menuList: string[]
  selectedMemu: string
  onSelectMenu: (menu: string) => void
}

const DropdownSelection = (props: DropdownSelectionProps) => {
  const { placeholder, menuList, selectedMemu, onSelectMenu } = props
  const [isOpen, setOpen] = useState(false)

  return (
    <DropdownMenu.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(
            'rounded-lg border-[1px] border-primary bg-[#FBFBFB]',
            'text-sm text-primary',
            'px-3 py-2',
            'flex items-center justify-between'
          )}
        >
          <span>{!!selectedMemu ? selectedMemu : placeholder}</span>
          <ChevronDownIcon
            className={clsx('transition-transform', { 'rotate-180': isOpen })}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={clsx(
            'w-[calc(100vw-32px)] bg-white rounded-md px-3 py-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]',
            'flex flex-col',
            'max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide',
            '[&>*:not(:last-child)]:border-b-[1px] border-[#E9E9E9]'
          )}
        >
          {menuList.map((menu) => (
            <DropdownMenu.Item
              key={menu}
              className={clsx(
                'text-sm leading-none text-primary rounded-[4px] px-1 relative select-none outline-none py-3',
                'cursor-pointer hover:bg-[#ebebeb]'
              )}
              onClick={() => onSelectMenu(menu)}
            >
              <span>{menu}</span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownSelection
