import {
  type  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  type  SortingState,
  getSortedRowModel,
  type  VisibilityState,
} from "@tanstack/react-table"
import { useState } from "react"
import AddTeamMember from "~/components/crm/add-team-member"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  
} from "~/components/ui/table"
import { AbdullahButton , buttonVariants } from "~/components/used/AbdullahButton"
import { cn } from "~/lib/utils"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],

}

export function DataTable<TData, TValue>({
  columns,
  data,

}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
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
    state: {
      sorting,
      columnVisibility,
    },
  })




  return (
    <>

    <div className="w-full h-[50px]  flex justify-end gap-x-4 items-center">
    <AddTeamMember />
    <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AbdullahButton className={cn(buttonVariants({variant :"secondary" , size : "sm"}))}>
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
  
    <div className="rounded-md  bg-white ">
    
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-none">
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
                className="border-none group "
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-md font-semibold   text-gray-900">
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
                   onClick={() => table.previousPage()}
                   disabled={!table.getCanPreviousPage()}
                   className={cn(buttonVariants({variant :"secondary" , size : "sm"}))}>
                Previous
              </AbdullahButton>

              <AbdullahButton
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={cn(buttonVariants({variant :"secondary" , size : "sm"}))}>
                  Next
              </AbdullahButton>
        {/* <PLusButtonStakHolder  refetch={refetch}/> */}
      </div>
    </>

    
  )
}
