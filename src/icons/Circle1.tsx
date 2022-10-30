import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
}

function Circle1({ className }: Props) {
  return (
    <svg
      className={clsx(className, 'fill-light-4/30')}
      viewBox="0 0 118 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.9643 0.787182H50.0357C14.8867 0.787182 -13.6071 29.2811 -13.6071 64.43C-13.6071 99.579 14.8867 128.073 50.0357 128.073H53.9643C89.1133 128.073 117.607 99.579 117.607 64.43C117.607 29.2811 89.1133 0.787182 53.9643 0.787182ZM50.0357 0.394325C14.6698 0.394325 -14 29.0641 -14 64.43C-14 99.796 14.6698 128.466 50.0357 128.466H53.9643C89.3302 128.466 118 99.796 118 64.43C118 29.0641 89.3302 0.394325 53.9643 0.394325H50.0357Z"
        fill="current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-9.6785 87.6086L73.6072 4.32289L73.885 4.60068L-9.40071 87.8864L-9.6785 87.6086Z"
        fill="current"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51.9925 128.466L51.6858 0.00146587L52.0786 0L52.3854 128.464L51.9925 128.466Z"
        fill="current"
      />
    </svg>
  )
}

export default Circle1
