import clsx from 'clsx'
import React from 'react'

interface TabsProps {
  title1: string
  title2: string
  isSelectedTitle1: boolean
  onClickTitle1: () => void
  onClickTitle2: () => void
}

const Tabs = ({
  title1,
  title2,
  isSelectedTitle1,
  onClickTitle1,
  onClickTitle2,
}: TabsProps) => {
  return (
    <div className="w-full flex">
      <button
        className={clsx(
          'w-1/2 py-2 flex justify-center items-center',
          'text-sm transition-colors',
          {
            'bg-secondary text-white font-medium': isSelectedTitle1,
            'bg-[#F2F2F2] text-[#969696]': !isSelectedTitle1,
          }
        )}
        onClick={onClickTitle1}
      >
        {title1}
      </button>
      <button
        className={clsx(
          'w-1/2 py-2 justify-center items-center',
          'text-sm transition-colors',
          {
            'bg-secondary text-white font-medium': !isSelectedTitle1,
            'bg-[#F2F2F2] text-[#969696]': isSelectedTitle1,
          }
        )}
        onClick={onClickTitle2}
      >
        {title2}
      </button>
    </div>
  )
}

export default Tabs
