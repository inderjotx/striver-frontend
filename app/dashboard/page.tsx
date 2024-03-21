import React from 'react'
import { Table } from '@/components/Table'
import { getSnippets } from '@/lib/getSnippets'
import { redirect } from 'next/navigation'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
    title: "Dashboard"
}

export default async function Page() {

    // do data fetching here 
    const data = await getSnippets()

    if (!data.success) {
        redirect('/')
    }


    return (
        <Table data={data.success ? data.data : []} />
    )
}
