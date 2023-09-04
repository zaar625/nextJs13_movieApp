import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from "react-icons/bs"
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 mx-w-6xl sm:mx-auto item-center py-6'>
        <div className='flex'>
            <MenuItem title='Home' address='/' Icon={AiFillHome}/>
        </div>
        <div className="">
            <MenuItem title='about' address='/about' Icon={BsInfoCircleFill}/>
        </div>  
        <div>
            <Link href="/">
                <h2 className="text-2xl">
                <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
                    IMDb
                </span>
                <span className="text-xl hidden sm:inline">Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
