import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

function Rect1({ className }: Props) {
  return (
    <svg
      className={clsx(className, 'stroke-light-2')}
      viewBox="0 0 80 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <rect x="1.5" y="1.5" width="84" height="84" stroke="current" />
        <rect x="1.5" y="1.5" width="84" height="84" stroke="current" />
        <path d="M20.3447 1.29311V85.4138" stroke="current" />
        <path d="M20.3447 1.29311V85.4138" stroke="current" />
        <path
          d="M1.29297 1.29311L43.4999 43.5M43.4999 43.5L85.7068 1.29311M43.4999 43.5L1.29297 85.7069M43.4999 43.5L85.9999 85.7069"
          stroke="current"
        />
        <path
          d="M1.29297 1.29311L43.4999 43.5M43.4999 43.5L85.7068 1.29311M43.4999 43.5L1.29297 85.7069M43.4999 43.5L85.9999 85.7069"
          stroke="current"
        />
        <rect
          x="33.2412"
          y="33.2414"
          width="20.5172"
          height="20.5172"
          stroke="current"
        />
        <rect
          x="33.2412"
          y="33.2414"
          width="20.5172"
          height="20.5172"
          stroke="current"
        />
        <path d="M43.5 43.5H85.7069" stroke="current" />
        <path d="M43.5 43.5H85.7069" stroke="current" />
      </g>
    </svg>
  )
}

export default Rect1
