"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useFormData } from "@/store/useFormData"



export function TagInput({ data }: { data: string[] }) {


    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [tags, setTags] = React.useState<string[]>([])
    const setTagsStore = useFormData((store) => store.setTag)

    const tagMap = data.map((item) => ({
        value: item,
        label: item
    }))


    React.useEffect(() => {

        setTagsStore(tags)

    }, [tags, setTagsStore])


    function remoteTag(idx: number) {

        if (tags[idx] === value) {
            setValue("")
        }

        setTags((prev) => ([...prev.slice(0, idx), ...prev.slice(idx + 1)]))

    }


    return (
        <div className="flex gap-2 border items-center w-full rounded-md p-2  flex-wrap ">

            {
                (tags.length != 0) &&
                tags.map((tag, idx) => (
                    <div className="p-1 px-2 flex items-center gap-1 bg-muted rounded-md text-sm"
                        key={tag} >
                        {tag}
                        <X className="size-4 hover:cursor-pointer" onClick={() => remoteTag(idx)} />
                    </div>
                ))
            }

            <Popover open={open} onOpenChange={setOpen}  >
                <PopoverTrigger asChild className="sticky top-0 left-0" >
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {value
                            ? tagMap.find((tag) => tag.value.toLowerCase() === value.toLowerCase())?.label
                            : "Add Tags"
                        }
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup  >

                            {tagMap.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        if (-1 === tags.indexOf(currentValue))
                                            setTags((prev) => ([...prev, framework.value]))
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

        </div>
    )
}
