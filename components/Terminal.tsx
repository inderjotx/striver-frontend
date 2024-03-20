'use client'
import { cn } from '@/lib/utils';
import { useFormData } from '@/store/useFormData'
import React, { HTMLProps } from 'react'

interface TerminalProps extends HTMLProps<HTMLDivElement> {

}


export function Terminal({ className }: TerminalProps) {
    const [result, setResult] = useFormData((state) => [state.result, state.setResult])





    const memory = result && typeof result === 'object' ? result.memory : '';
    const time = result && typeof result === 'object' ? result.time : '';
    const errors = result && typeof result === 'object' ? result.stderr : result;
    const stdout = result && typeof result === 'object' ? result.stdout : '';


    return (
        <div className={cn('dark:bg-zinc-900 shadow-md h-full w-full px-4  flex-col flex', className)}>
            <div className='flex justify-between text-[12px]  h-9 items-center'>
                <TerminalNavElement>Memory   <span className='text-green-400'>{memory}</span> </TerminalNavElement>
                <TerminalNavElement className='flex gap-2'  >
                    Time <span className='text-green-400'>{time}</span>
                    <span className='hover:cursor-pointer' onClick={() => setResult(null)} >Clear</span>
                </TerminalNavElement>
            </div>

            <div className='flex w-full'>
                {errors && <ShowError>{errors}</ShowError>}
                {stdout && <ShowStdOut>{stdout}</ShowStdOut>}
            </div>

        </div>
    )
}


interface TerminalNavElement extends HTMLProps<HTMLDivElement> {

}



function TerminalNavElement({ children, className, ...args }: TerminalNavElement) {

    return (

        <span className={cn('text-[12px]', className)} >{children}</span>
    )
}

function ShowError({ children }: TerminalNavElement) {
    return (
        <span className='text-[12px] font-mono text-red-500' >{children}</span>
    )
}



function ShowStdOut({ children }: TerminalNavElement) {
    return (
        <span className='text-[12px]  font-mono' >{children}</span>
    )
}