"use client"
import { useState } from "react"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
    getPaginationRowModel,
    ColumnFiltersState,
    getFilteredRowModel,
    VisibilityState,
    Row,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Payment } from "./data/data"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [status, setStatus] = useState<string>('')
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})


    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        // globalFilterFn: customFilterFn,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        onColumnVisibilityChange: setColumnVisibility,

        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,

        },
    })

    const changeStatus = ({ status }: { status: string }) => {
        const newStatus = status !== 'all' ? status : ""
        table.getColumn("status")?.setFilterValue(newStatus)

    }

    const deleteRows = () => {
        const ids = table.getSelectedRowModel().rows.map((ele) => (ele.original as Payment).clientName)
        console.log(ids)
    }


    return (
        <div className="overflow-hidden rounded-md border ">
            <Button variant='destructive' onClick={deleteRows}>Eliminar</Button>

            <div className="flex items-center py-4 justify-between p-12">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => {
                        setStatus('all')
                        table.getColumn("status")?.setFilterValue("")
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }

                    }
                    className="max-w-sm"
                />
                <p>{status}</p>
                <Select onValueChange={(value) => {
                    setStatus(value)
                    changeStatus({ status: value })
                }} value={status}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value='all'>ALL</SelectItem>
                            <SelectItem value='pending'>pending</SelectItem>
                            <SelectItem value='processing'>processing</SelectItem>
                            <SelectItem value='success'>success</SelectItem>
                            <SelectItem value='failed'>failed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Columns
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) => column.getCanHide()
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


            </div>




            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>

            <div className="text-muted-foreground flex-1 text-sm">
                {table.getFilteredSelectedRowModel().rows.length} of{" "}
                {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <Select
                onValueChange={(value) => {
                    table.setPageSize(+value)
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder='10 rows'></SelectValue>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Rows per page</SelectLabel>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="30">30</SelectItem>


                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>


        </div>
    )
}