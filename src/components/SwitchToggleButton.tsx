import clsx from 'clsx'
import React from 'react'

interface SwitchToggleButtonProps {
  toggleState: boolean
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>
}

const SwitchToggleButton = ({
  toggleState,
  setToggleState,
}: SwitchToggleButtonProps) => {
  const toggleClass = 'transform translate-x-[24px]'

  return (
    <div
      className={clsx(
        'md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full px-[2px] cursor-pointer',
        { 'bg-gray-400': !toggleState, 'bg-green-500': toggleState }
      )}
      onClick={() => {
        setToggleState(!toggleState)
      }}
    >
      {/* Switch */}
      <div
        className={
          'bg-[#FFF7F2] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
          (toggleState ? toggleClass : null)
        }
      />
    </div>
  )
}

export default SwitchToggleButton
