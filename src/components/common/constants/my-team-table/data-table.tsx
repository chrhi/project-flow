import {
    type  ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    type  SortingState,
    getSortedRowModel,
    type  VisibilityState,
    type ColumnFiltersState,
    getFilteredRowModel,
  } from "@tanstack/react-table"
  import { useState } from "react"
  import { Button } from "~/components/ui/button"
  import React from "react"
  import { Input } from "~/components/ui/input"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    
  } from "~/components/ui/table"
  import { Loader2 } from 'lucide-react'
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "~/components/ui/dropdown-menu"
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton"
import { cn } from "~/lib/utils"
import AddTeamMember from "./AddTeamMember"
  
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[],
    isLoading : boolean

  }
  
  export function DataTable<TData, TValue>({
    columns,
    data,
    isLoading
   
  }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting,
        columnVisibility,
        columnFilters,
      },
    })
  
  
  
  
    return (
      <>
      <div className="flex w-full items-center justify-between ">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="w-fit flex h-full gap-x-4">
        <AddTeamMember />
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <AbdullahButton
             className={cn(buttonVariants({variant : "secondary" , size :"sm"}) , "ml-auto")}>
                Columns
            </AbdullahButton>
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
                      onCheckedChange={(value: any) =>
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
      <div className="rounded-md border w-full  bg-white ">
      
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
    
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
          <AbdullahButton
            className={cn(buttonVariants({variant : "secondary" , size :"sm"}))}
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </AbdullahButton>
          <AbdullahButton
             className={cn(buttonVariants({variant : "secondary" , size :"sm"}))}
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </AbdullahButton>
         
        </div>
      </>
  
      
    )
  }
  