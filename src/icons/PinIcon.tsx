interface PinIconProps {
  className?: string
  fill?: string
  stroke?: string
}

export const PinIcon = (props: PinIconProps) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 9.875C10.2426 9.875 11.25 8.86764 11.25 7.625C11.25 6.38236 10.2426 5.375 9 5.375C7.75736 5.375 6.75 6.38236 6.75 7.625C6.75 8.86764 7.75736 9.875 9 9.875Z"
        stroke={props.stroke || '#211C54'}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17C10.5 14 15 12.0637 15 8C15 4.68629 12.3137 2 9 2C5.68629 2 3 4.68629 3 8C3 12.0637 7.5 14 9 17Z"
        stroke={props.stroke || '#211C54'}
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
