import React from 'react'

export default function loading() {

    const array = Array.from({ length: 10 }, (_, idx) => idx)


    return (
        <div className='w-full h-full flex-col px-20 flex mt-10 gap-2 justify-cente '>
            <div className='flex gap-2  animate-pulse'>
                <div className='w-[100px] rounded-sm bg-muted h-10' ></div>
                <div className='w-[200px] bg-muted rounded-sm h-10' ></div>
            </div>
            <div className='flex gap-2 flex-col '>
                {

                    array.map((val) => (
                        <div key={val} className='flex rounded-sm animate-pulse bg-muted gap-2 w-full h-10 '>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}
