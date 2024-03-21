import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MonacoEditor } from "./CodeEditor/editor"
import { Button } from "./ui/button"

interface DrawerButtonProps extends React.HTMLProps<HTMLDivElement> {
    language: SupportedLanguages,
    code: string,
    height: string,
    width: string
}



export function DrawerViewCode({ language, code, height, width, children, className = "" }: DrawerButtonProps) {


    return (
        <Drawer >
            <DrawerTrigger asChild>
                <Button type="button" size={"sm"} variant={"secondary"}>View</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[500px]  items-center ">
                <div className="flex mt-2 flex-col h-[450px] overflow-hidden rounded-md w-10/12">
                    <MonacoEditor language={language} code={code} setCode={(val: string) => { }} height={height} width={width} className={`${className}`} readOnly />
                    <div className="w-1/3">
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
