
import { DrawerViewCode } from '@/components/DrawerViewCode'
import { getHighlightedCode } from '@/lib/getHighlightedCode'
import { getSnippets } from '@/lib/getSnippets'
import { redirect } from 'next/navigation'
import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MonacoEditor } from "@/components/CodeEditor/editor"
import { cn, getFilteredSnippets } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { getTags } from '@/lib/getTags'
import { InputSnippets } from '@/components/ui/InputSnippets'

type Props = {
    searchParams: {
        tags: string[]
    }
}




const page: React.FC<Props> = async ({ searchParams }) => {

    const snippetsProm = getSnippets()
    console.log(searchParams)
    const tagsProm = getTags()

    const [snippetsData, tags] = await Promise.all([snippetsProm, tagsProm])

    if (!snippetsData.success) {
        redirect('/create')
    }

    let snippets: Snippet[] = []

    if ('tags' in searchParams) {
        console.log("pada")
        console.log(searchParams.tags)
        snippets = getFilteredSnippets(snippetsData.data, searchParams.tags)
    }
    else {
        snippets = snippetsData.data
    }


    // have input as client component , on click it will make call to the same page with the query params 


    console.log(snippets)
    return (
        <div className='flex flex-col w-full h-full mt-10 '>

            <div className='' >
                <InputSnippets tags={tags} />
            </div>

            <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 px-20'>

                {
                    snippets.map(async (snippet) => {


                        const html = await getHighlightedCode({ code: snippet.code, language: snippet.language as SupportedLanguages })

                        return (

                            <Drawer key={snippet.id}  >
                                <DrawerTrigger asChild className='cursor-pointer' >
                                    <div key={snippet.id} className='flex  items-center justify-center'  >
                                        <div className='w-[250px] flex flex-col col-span-1 rounded-md  overflow-hidden h-[300px] border' key={snippet.id}   >

                                            <div dangerouslySetInnerHTML={{ __html: html }}
                                                className='w-full  h-3/4 text-sm overflow-scroll scrollbar-w-[3px] scrollbar scrollbar-thumb-zinc-900 scrollbar-track-black' >

                                            </div>
                                            <div className='w-full flex-col flex gap-3 h-1/3 border-t p-3'>
                                                {/* name and tags */}
                                                <div className='text-xs font-mono'>
                                                    <span className="text-xs text-muted-foreground">By : </span> {snippet.firstName} {snippet.lastName}
                                                    <br />
                                                    <span> <span className='text-muted-foreground' >Language :</span> {snippet.language} </span>
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

                                </DrawerTrigger>
                                <DrawerContent className="h-[500px]  items-center  ">
                                    <div className="flex mt-2 flex-col h-[450px] overflow-hidden rounded-md w-10/12">
                                        <MonacoEditor language={snippet.language} code={snippet.code} height={'h-[500px]'} width={"w-full"} className='' readOnly />
                                        <div className={cn('dark:bg-zinc-900 shadow-md h-[200px] w-full px-4  flex-col flex')}>
                                            <div className='font-mono flex gap-2 text-[12px]  h-9 items-center'>
                                                <ChevronRight color="green" className="size-4" />  {snippet.stdOut}
                                            </div>
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default page



// <Drawer >
//     <DrawerTrigger asChild>
//         <Button type="button" size={"sm"} variant={"secondary"}>View</Button>
//     </DrawerTrigger>
//     <DrawerContent className="h-[500px]  items-center ">
//         <div className="flex mt-2 flex-col h-[450px] overflow-hidden rounded-md w-10/12">
//             <MonacoEditor language={snippet.language} code={snippet.code} height={'h-[500px]'} width={"w-full"} className='' readOnly />
//             <div className={cn('dark:bg-zinc-900 shadow-md h-[200px] w-full px-4  flex-col flex')}>
//                 <div className='font-mono flex gap-2 text-[12px]  h-9 items-center'>
//                     <ChevronRight color="green" className="size-4" />  {snippet.stdOut}
//                 </div>
//             </div>
//         </div>
//     </DrawerContent>
// </Drawer>
