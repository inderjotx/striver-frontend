import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const poppins = Poppins({ subsets: ["latin"], style: "normal", weight: ['800', '900'] })

export default function page() {
    return (
        <div className="relative h-full w-full ">

            <div className='flex gap-5 flex-col w-full h-screen items-center'>

                <div className='flex  items-center gap-3  mt-20 flex-col'>
                    <h1 className={cn('text-5xl font-black', poppins.className)}>SnippetSpace</h1>
                    <div className={cn('flex gap-2')}>
                        <h2 className={cn('cool_text_1 text-4xl font-black', poppins.className)}>Share,</h2>
                        <h2 className={cn('cool_text_2 text-4xl font-black', poppins.className)}>Learn,</h2>
                        <h2 className={cn('cool_text_3 text-4xl font-black', poppins.className)}>Code</h2>
                    </div>
                </div>

                <Button className='text-xl p-5 rounded-full' variant={"outline"} asChild >
                    <Link href={'/create'} className='space-x-2 group' >
                        <span> Get Started </span> <ArrowRight className='group-hover:translate-x-1 transition-all' />
                    </Link>
                </Button>
                <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>
        </div>
    )
}
