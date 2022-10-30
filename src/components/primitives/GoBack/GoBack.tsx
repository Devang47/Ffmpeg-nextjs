import clsx from 'clsx'
import React from 'react'
import BackArrow from '~/icons/BackArrow'

type Props = {
  className?: string
  label?: string
  onClick?: () => void
}

function GoBack({ className = '', label = 'back', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded border border-light-4 text-light-3 text-center flex items-center gap-2 text-sm font-semibold py-1.5 px-6 pl-4 bg-dark-1 duration-75',
        className
      )}
    >
      <BackArrow />
      {label}
    </button>
  )
}

export default GoBack
