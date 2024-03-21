'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LANGUAGES } from "@/constant"
import { useFormData } from "@/store/useFormData"

interface SelectLanguageProps {
    language: SupportedLanguages,
    setLanguage: (val: SupportedLanguages) => void,
    width?: string
}



export function SelectLanguage({ language, setLanguage, width = "w-full" }: SelectLanguageProps) {


    return (
        <Select value={language} onValueChange={setLanguage} >
            <SelectTrigger className={`${width}`}>
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-2">
                        {
                            LANGUAGES.map((lang) => (
                                <SelectItem className="" key={lang} value={lang}  >{lang}</SelectItem>
                            ))
                        }
                    </div>
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}
