import { Payment, payments } from "../data-table/data/data"
import { columns } from "./columns"
import { DataTable } from "./data-table"


const FetchData = async (): Promise<Payment[]> => {
    return payments
}


export default async function Home() {
    const data = await FetchData()
    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}