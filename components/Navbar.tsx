import { NAVLINKS } from '@/constant'
import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export function Navbar() {
    return (
        <nav className='flex  relative h-20  justify-center items-center'>
            <div className='relative flex px-8 bg-muted  text-sm items-center gap-3  h-10 rounded-full'>
                {
                    NAVLINKS.map(({ name, href }) => (
                        <Link key={name} href={href} className='p-1 px-2 hover:bg-black/50  rounded-full' >
                            {name}
                        </Link>
                    ))
                }
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild >
                    <Button variant={"ghost"} className='absolute right-2 md:right-8 rounded-full px-3'  >
                        <Github className='size-6 '></Github>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Github</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <a target='_blank' href='https://github.com/inderjotx/striver-frontend' >
                            Frontend
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a target='_blank' href='https://github.com/inderjotx/striver-backend' >
                            Backend
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}
