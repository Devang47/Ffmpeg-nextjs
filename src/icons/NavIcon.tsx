import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

function NavIcon({ className }: Props) {
  return (
    <svg
      width="27"
      height="10"
      className={clsx(className, 'stroke-light-2')}
      viewBox="0 0 27 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.163574"
        y1="1"
        x2="26.2851"
        y2="1"
        stroke="current"
        strokeWidth="2"
      />
      <line
        x1="0.163574"
        y1="9"
        x2="26.2851"
        y2="9"
        stroke="current"
        strokeWidth="2"
      />
    </svg>
  )
}

export default NavIcon
