"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Payment } from "./data/data";
import { Badge } from "@/components/ui/badge";

const showBadget: any = {
    ["pending"]: "default",
    ["processing"]: "info",
    ["success"]: "succes",
    ["failed"]: "destructive",
}


export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const values: string = row.getValue("status")
            return <Badge variant={showBadget[values]}>{`${values}`}</Badge>
        }
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            console.log(row)
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)
            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
]