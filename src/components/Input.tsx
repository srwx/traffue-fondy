import clsx from 'clsx'
import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'rounded-lg border-[1px] border-[#E9E9E9] bg-[#FBFBFB] w-full',
          'focus-within:ring-1 focus-within:ring-secondary',
          'transition-all',
          'py-2 text-sm placeholder:text-[#C3C3C3]',
          'flex',
          className
        )}
      >
        {leftIcon && <div className="ml-2">{leftIcon}</div>}
        <input
          type={type}
          className={clsx('bg-transparent w-full', 'outline-none indent-2')}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
