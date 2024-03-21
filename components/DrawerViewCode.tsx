import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MonacoEditor } from "./CodeEditor/editor"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface DrawerButtonProps extends React.HTMLProps<HTMLDivElement> {
    language: SupportedLanguages,
    code: string,
    height: string,
    width: string,
    stdOut: string
}



export function DrawerViewCode({ language, stdOut, code, height, width, className = "" }: DrawerButtonProps) {


    return (
        <Drawer >
            <DrawerTrigger asChild>
                <Button type="button" size={"sm"} variant={"secondary"}>View</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[500px]  items-center ">
                <div className="flex mt-2 flex-col h-[450px] overflow-hidden rounded-md w-10/12">
                    <MonacoEditor language={language} code={code} setCode={(val: string) => { }} height={height} width={width} className={`${className}`} readOnly />
                    <div className={cn('dark:bg-zinc-900 shadow-md h-[200px] w-full px-4  flex-col flex', className)}>
                        <div className='font-mono flex gap-2 text-[12px]  h-9 items-center'>
                            <ChevronRight color="green" className="size-4" />  {stdOut}
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
