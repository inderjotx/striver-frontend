
import { DrawerViewCode } from '@/components/DrawerViewCode'
import { getHighlightedCode } from '@/lib/getHighlightedCode'
import { getSnippets } from '@/lib/getSnippets'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams: {
        [key: string]: string
    }
}

const page: React.FC<Props> = async ({ searchParams }) => {

    const snippets = await getSnippets()

    if (!snippets.success) {
        redirect('/create')
    }

    console.log(snippets)
    return (
        <div className='grid grid-cols-2 mt-10 md:grid-cols-4 lg:grid-cols-5'>

            {
                snippets.data.map(async (snippet) => {


                    const html = await getHighlightedCode({ code: snippet.code, language: snippet.language as SupportedLanguages })

                    return (
                        <div key={snippet.id} className='flex  items-center justify-center'  >
                            <div className='w-[250px] flex flex-col col-span-1 rounded-md  overflow-hidden h-[300px] border' key={snippet.id}   >

                                <div dangerouslySetInnerHTML={{ __html: html }}
                                    className='w-full h-3/4 text-sm overflow-scroll scrollbar-w-[3px] scrollbar scrollbar-thumb-zinc-900 scrollbar-track-black' >

                                </div>
                                <div className='w-full flex-col flex gap-3 h-1/3 border-t p-3'>
                                    {/* name and tags */}

                                    <div className='text-xs font-mono'>
                                        <span className="text-xs text-muted-foreground">By : </span> {snippet.firstName} {snippet.lastName}
                                        <br />
                                        <span> <span className='text-muted-foreground' >Languages :</span> {snippet.language} </span>
                                    </div>

                                    <div className='flex gap-1' >
                                        {
                                            snippet.tags.map((tag: string) => (
                                                <span key={tag} className='p-1 px-2 bg-muted text-xs rounded-md' >{tag}</span>
                                            ))
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}


export default page