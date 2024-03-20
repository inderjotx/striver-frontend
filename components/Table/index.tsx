import { columns } from "./columns"
import { DataTable } from "./data-table"


interface TableProps {
    data: Snippet[]
}


export function Table({ data }: TableProps) {
    return (
        <div className="container z-20 mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
