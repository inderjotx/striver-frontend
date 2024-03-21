"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import { formatTime } from "@/lib/utils"
import { DrawerViewCode } from "../DrawerViewCode"

export const columns: ColumnDef<Snippet>[] = [

    {
        accessorKey: "createdAt",
        header: "View",
        cell: ({ row }) => {
            const language = row.getValue("language") as SupportedLanguages
            const code = row.getValue("code") as SupportedLanguages
            const stdOut = row.getValue("stdOut") as SupportedLanguages

            return <DrawerViewCode stdOut={stdOut} language={language} code={code} height="h-[500px]" width="w-fuu" />
        }

    },
    {
        accessorKey: "firstName",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-1 hover:cursor-pointer "
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
    },

    {
        accessorKey: "language",
        header: ({ column }) => {
            return (
                <div
                    className="flex gap-1 hover:cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Language
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            )
        },
    },
    {
        accessorKey: "code",
        header: "Code",
        cell: ({ row }) => {
            const value: string = row.getValue("code")
            // show only first 100 character
            return <div className="font-mono " >{`${value.length > 100 ? value.substring(0, 97) + "..." : value}`}</div>
        }
    },

    {
        accessorKey: "stdIn",
        header: "StdIn",
        cell: ({ row }) => {
            const value = row.getValue("stdIn")
            return <div>{`${value ? value : "null"}`}</div>
        }
    },

    {
        accessorKey: "stdOut",
        header: "StdOut",
        cell: ({ row }) => {
            const value = row.getValue("stdOut")
            return <div>{`${value ? value : "null"}`}</div>
        }
    },

    {
        accessorKey: "createdAt",
        header: "Time",
        cell: ({ row }) => {
            const value = row.getValue("createdAt") as string
            const formattedTime = formatTime(value)
            return <div>{`${formattedTime ? formattedTime : "null"}`}</div>
        }

    },

]