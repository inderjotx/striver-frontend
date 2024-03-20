"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Snippet>[] = [

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
        header: "Time"
    },

]