import clsx from 'clsx'
import React from 'react'

interface GrayButtonProps {
  children: string
  active?: boolean
  disabled?: boolean
  onClick?: () => void
}

const GrayButton = ({
  children,
  active,
  disabled,
  onClick,
}: GrayButtonProps) => {
  return (
    <button
      className={clsx('rounded-md px-3 py-1 text-sm w-max transition-all', {
        'text-[#969696] bg-[#EFEFEF]': !active,
        'text-secondary bg-[#FFEBE2]': active,
        'cursor-not-allowed opacity-30': disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default GrayButton
