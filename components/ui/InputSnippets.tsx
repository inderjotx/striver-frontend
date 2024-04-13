'use client'
import React, { useState } from 'react'
import { TagInput } from '../Form/TagInput'
import qs from 'querystring'
import { Button } from './button'
import { useRouter } from 'next/navigation'

type Props = {
    tags: string[]
}

export const InputSnippets = ({ tags }: { tags: string[] }) => {

    const [selectedTags, setTags] = useState<string[]>([])
    const router = useRouter()


    return (
        <form
            className='flex items-center gap-2'
            action={() => {

                const queryString = qs.stringify({ tags: selectedTags })
                console.log(queryString)
                router.push(`/snippets?${queryString}`)


            }} >
            <div className='w-[400px]' >
                <TagInput data={tags} setTagsStore={setTags} />
            </div>
            <Button type='submit' >Search</Button>
        </form>
    )
}