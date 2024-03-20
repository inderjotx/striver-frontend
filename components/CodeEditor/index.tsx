'use client'
import { useFormData } from '@/store/useFormData';
import { HTMLProps, } from 'react';
import { MonacoEditor } from './editor';


interface CodeEditorProps extends HTMLProps<HTMLDivElement> {
    height: string,
    width: string,
    className: string,
}



export function CodeEditor({ height, width, className }: CodeEditorProps) {


    const { language, code, setCode } = useFormData((state) => state)





    return (
        <MonacoEditor language={language} code={code} setCode={setCode} height={height} width={width} className={className} />
    )
}


