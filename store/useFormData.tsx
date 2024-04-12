import { create } from 'zustand'

interface useFormDataProps {
    firstName: string,
    lastName: string,
    code: string,
    language: SupportedLanguages,
    stdIn: string,
    result: JudgeResult | string | null,
    tags: string[],


    setCode: (val: string) => void,
    setFirstName: (val: string) => void,
    setLastName: (val: string) => void,
    setLanguage: (val: SupportedLanguages) => void,
    setStdIn: (val: string) => void,
    setResult: (val: JudgeResult | string | null) => void
    setDefault: () => void,
    setTag: (val: string[]) => void


}



export const useFormData = create<useFormDataProps>((set) => ({

    firstName: "",
    lastName: "",
    code: "",
    language: "Java",
    stdIn: "",
    result: null,
    tags: [],


    setCode: (val) => set({ code: val }),
    setFirstName: (val) => set({ firstName: val }),
    setLastName: (val) => set({ lastName: val }),
    setLanguage: (val) => set({ language: val }),
    setStdIn: (val) => set({ stdIn: val }),
    setResult: (val) => set({ result: val }),
    setDefault: () => set({
        firstName: "",
        lastName: "",
        code: "",
        language: "Java",
        stdIn: "",
        result: null,
    }),
    setTag: (val) => set({ tags: val })
}))
