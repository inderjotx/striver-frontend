import { NAVLINKS } from '@/constant'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'





export function Navbar() {
    return (
        <nav className='flex  relative h-20  justify-center items-center'>
            <div className='relative flex px-8 bg-muted text-sm items-center gap-3 h-10 rounded-full'>
                {
                    NAVLINKS.map(({ name, href }) => (
                        <Link key={name} href={href} className='p-1 hover:bg-black/50 px-3 rounded-full' >
                            {name}
                        </Link>
                    ))
                }
            </div>
            <a href={'https://github.com/inderjotx/striver-frontend'} className='absolute right-8' target='_blank' >
                <Github className='size-6 '></Github>
            </a>

        </nav>
    )
}
