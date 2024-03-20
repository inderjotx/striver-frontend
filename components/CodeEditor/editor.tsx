
'use client'
import { cn } from '@/lib/utils';
import { useFormData } from '@/store/useFormData';
import { Editor, loader } from '@monaco-editor/react';
import { Code2 } from 'lucide-react';
import { useTheme } from 'next-themes';
import { HTMLProps, Suspense } from 'react';


interface CodeEditorProps extends HTMLProps<HTMLDivElement> {
    height: string,
    width: string,
    className: string,
    language: string,
    code: string,
    setCode: (val: string) => void
    readonly?: boolean
}



export function MonacoEditor({ height, code, language, setCode, width, className, readOnly = false, ...props }: CodeEditorProps) {

    const { theme } = useTheme()
    const editorTheme = theme === 'dark' ? "vs-dark" : "vs-light"


    function handleChange(val: string | undefined) {
        if (!val) return
        setCode(val)

    }


    return (
        <div className={cn('w-full  h-full divide-y flex flex-col border', className)}>
            <nav className='h-8 w-full gap-2 text-primary dark:bg-zinc-900 flex items-center p-2'>
                <Code2 size={16} /><span className='text-[12px] text-foreground'>{language}</span>
            </nav>

            <Suspense fallback={<CodeEditorFallback />} >

                <Editor
                    language={language.toLowerCase()}
                    theme={editorTheme}
                    value={code}
                    onChange={handleChange}
                    options={{
                        readOnly: readOnly,
                        // quickSuggestions: false,
                        minimap: { enabled: false }
                    }}
                    beforeMount={() => loader.init()}
                />

            </Suspense>
        </div>
    )
}



function CodeEditorFallback() {
    return (
        <div className="w-full h-full bg-white dark:bg-[#1e1e1e]"></div>
    )
}