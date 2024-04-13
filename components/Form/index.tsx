'use client'
import React from "react";


import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { SelectLanguage } from "../SelectLanguage";
import { useFormData } from "@/store/useFormData";
import { execCodeSchema, formDataSchema } from "@/lib/validations";
import { toast } from "sonner";
import { submitData } from "@/lib/submitData";
import { LANGUAGES_ID } from "@/constant";
import { executeCode } from "@/lib/executeCode";
import { DrawerButton } from "./DrawerButton";
import { TagInput } from "./TagInput";





export function Form({ tags }: { tags: string[] }) {


    const { stdIn, setCode, firstName, setFirstName, lastName, setLastName, code, setTag, language, setStdIn, setResult, setLanguage, setDefault, tags: selectedTag } = useFormData((state) => state)

    async function handleCodeExecution() {


        const payload = { source_code: code, language_id: LANGUAGES_ID[language], stdIn: stdIn }

        const isValid = execCodeSchema.safeParse(payload)

        if (isValid.success) {

            console.log('valid')
            const promise = executeCode(isValid.data)
            toast.promise(promise, {
                loading: "Executing...",
            })

            const response = await promise
            setResult(response.success ? response.judgeResult : response.error)

            if (response.success) {
                toast.success("Code Executed Successfully")
            }

            else {

                if (typeof response.error === 'object') {

                    toast.error(`Execution error : ${response.error.status.description}`)
                }

                else {
                    toast.error(`Execution error : ${response.error}`)
                }

            }


        }

        else {

            console.log(isValid.error)
            isValid.error.errors.forEach((err) => {
                toast.error(err.message)
            })

        }

    }




    return (
        <div className="max-w-md flex border flex-col h-full justify-center md:justify-between w-full  mx-auto  rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Create Snippet
            </h2>

            <form className="my-8" action={async () => {

                const payload = { stdIn, firstName, lastName, code, language, language_id: LANGUAGES_ID[language], tags: selectedTag }

                const isValid = formDataSchema.safeParse(payload)

                if (isValid.success) {

                    const promise = submitData(isValid.data)
                    toast.promise(promise, {
                        loading: "Executing code first...",
                    })

                    const response = await promise

                    if (response.success) {
                        toast.success("Successfully added the snippet")
                        setDefault()
                    }

                    else {
                        setResult(response.error || null)
                        toast.error("Error adding snippet retry")
                    }


                }

                else {

                    isValid.error.errors.forEach((err) => {
                        toast.error(err.message)
                    })

                }


            }} >
                <div className="flex my-3 lg:flex-row flex-col gap-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="stdin">Standard Input</Label>
                    <Input value={stdIn} onChange={(e) => setStdIn(e.target.value)} id="stdIn" placeholder="node index.js" type="text" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="language">Select Language</Label>
                    <SelectLanguage language={language} setLanguage={setLanguage} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="tags">Tags</Label>
                    <TagInput setTagsStore={setTag} data={tags} />
                </LabelInputContainer>

                <div className="flex gap-3 flex-col">

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="button"
                        onClick={handleCodeExecution}
                    >
                        Test
                        <BottomGradient />
                    </button>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Save
                        <BottomGradient />
                    </button>

                    <DrawerButton language={language} setCode={setCode} height="h-[500px]" width="w-full" code={code}  >
                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block md:hidden dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="button"
                        >
                            Edit Code
                            <BottomGradient />
                        </button>

                    </DrawerButton>


                </div>
            </form>
        </div>
    );
}

const BottomGradient = () => {

    return (
        <>
            <span className={`group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent `} />
            <span className={`group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent`} />
        </>
    );
};


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
