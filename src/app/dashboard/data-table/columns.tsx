"use client"

import { ColumnDef, FilterFn, Row } from "@tanstack/react-table"
import { Payment } from "./data/data";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox"

const showBadget: any = {
    ["pending"]: "default",
    ["processing"]: "info",
    ["success"]: "succes",
    ["failed"]: "destructive",
}


const customFilterFn: FilterFn<Payment> = (rows: Row<Payment>, columnId: string, filterValue: number | string,) => {
    const data = rows.original
    const separte = String(filterValue).split(' ')
    // for (let letter of separte) {
    //     if (data.email.includes(String(letter)) || data.status.includes(String(letter)) || data.clientName.includes(String(letter))) {
    //     } else {
    //         return false
    //     }
    // }

    const rowValues = `${data.email} ${data.clientName} ${data.status}`.toLowerCase()

    // aqui se usa every porque every evalua que todo se cumpla es decir 'to, love' -> part sacara to,love y esto va a devolver true solo si las 2 palabras existen ya se
    // en data.email o data.client o data.status haciendo esto un filtro muy inteligente porque compara con los 3 campos y a la ves lo hace ligero
    return separte.every((part) => rowValues.includes(part))

}


export const columns: ColumnDef<Payment>[] = [{
    id: "select",
    header: ({ table }) => (
        <Checkbox
            checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
        />
    ),
    cell: ({ row }) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />
    ),
    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: "clientName",
    header: "Client Name",
    filterFn: customFilterFn,

},
{
    accessorKey: "status",
    filterFn: customFilterFn,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    cell: ({ row }) => {
        const values: string = row.getValue("status")
        return <Badge variant={showBadget[values]}>{`${values}`}</Badge>
    }
},
{
    accessorKey: "amount",
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Amaunt
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    cell: ({ row }) => {
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
    filterFn: customFilterFn,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
},
{
    id: "actions",
    cell: ({ row }) => {
        const payment = row.original
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => {
                            navigator.clipboard.writeText(payment.id)
                            toast('Copy clipboard', { position: 'top-right' })
                        }}
                    >
                        Copy payment ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )

    }
},
]