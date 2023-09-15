import { SettingIcon, TraffueFondyIcon } from '@/icons'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div
      className="py-1 grid grid-cols-3 items-center"
      style={{ boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <Link href={'/map2'} className="col-start-2">
        <TraffueFondyIcon width={130} height={40} />
      </Link>

      <Link href={'/setting'} className="flex justify-end col-start-3 pr-3">
        <SettingIcon />
      </Link>
    </div>
  )
}

export default Navbar
