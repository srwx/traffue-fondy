import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className } = props

  return (
    <button className={clsx('rounded-lg p-3', className)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
