import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"


import { MonacoEditor } from "../CodeEditor/editor"
import { Terminal } from "../Terminal"


interface DrawerButtonProps extends React.HTMLProps<HTMLDivElement> {
    language: SupportedLanguages,
    code: string,
    setCode: (val: string) => void,
    height: string,
    width: string
}





export function DrawerButton({ language, setCode, code, height, width, children, className = "" }: DrawerButtonProps) {


    return (
        <Drawer >
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent className="h-[500px]  items-center ">
                <div className="flex mt-2 flex-col h-[450px] overflow-hidden rounded-md w-10/12">

                    <MonacoEditor language={language} code={code} setCode={setCode} height={height} width={width} className={`${className}`} />
                    <Terminal className="h-[200px]" />
                </div>
            </DrawerContent>
        </Drawer>
    )
}
