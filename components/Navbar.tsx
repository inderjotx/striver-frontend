import { NAVLINKS } from '@/constant'
import Link from 'next/link'
import React from 'react'





export function Navbar() {
    return (
        <nav className='flex justify-center h-16  items-center'>
            <div className=' flex px-8 bg-muted text-sm items-center gap-3 h-10 rounded-full'>
                {
                    NAVLINKS.map(({ name, href }) => (
                        <Link key={name} href={href} className='p-1 hover:bg-black/50 px-3 rounded-full' >
                            {name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}
