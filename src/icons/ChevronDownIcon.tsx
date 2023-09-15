interface ChevronDownIconProps {
  className?: string
}

export const ChevronDownIcon = (props: ChevronDownIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 8L10 13L15 8"
        stroke="#211C54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
