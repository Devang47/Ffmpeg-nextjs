import * as React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  sectionClass?: string
  className?: string
  centered?: boolean
}

function Container({ children, sectionClass, className, centered }: Props) {
  return (
    <section
      className={clsx(
        sectionClass,
        centered && 'h-screen w-full flex items-center justify-center'
      )}
    >
      <div className={clsx(className, 'w-11/12 max-w-[1200px] py-4 mx-auto')}>
        {children}
      </div>
    </section>
  )
}

export default Container
