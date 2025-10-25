import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type PaginationState,
  type Updater,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";
import { useMemo, useState } from "react";
import { Button } from "./ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [searchParams, setSearchParams] = useSearchParams();

  // Mengambil state pagination dari URL
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "10";

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: Number(page) - 1,
    pageSize: Number(limit),
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const handlePaginationChange = (updater: Updater<PaginationState>) => {
    const newState =
      typeof updater === "function" ? updater(pagination) : updater;
    setPagination(newState);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", (newState.pageIndex + 1).toString());
    newSearchParams.set("limit", newState.pageSize.toString());
    setSearchParams(newSearchParams);
  };

  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const pages = [];
    // Batasi sebanyak 5 tombol angka halaman
    let startPage = Math.max(0, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    if (currentPage - 2 < 0) {
      endPage = Math.min(totalPages - 1, endPage + (2 - currentPage));
    }

    if (currentPage + 2 >= totalPages) {
      startPage = Math.max(0, startPage - (currentPage + 2 - (totalPages - 1)));
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers(table.getPageCount(), pageIndex);

  return (
    <div>
      <div className="rounded-md border h-full flex flex-col">
        <Table className="w-full table-fixed min-h-screen overflow-y-scroll">
          <TableHeader className="sticky top-0 bg-white z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="whitespace-normal wrap-break-word">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="whitespace-normal wrap-break-word align-top">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-between space-x-2 py-4">
        {/* Bagian Kiri: "Show Entries" */}
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">Show</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              handlePaginationChange((old) => ({
                ...old,
                pageIndex: 0, // Reset ke halaman 1 saat ganti limit
                pageSize: Number(value),
              }));
            }}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">Entries</p>
        </div>

        {/* Bagian Kanan: Tombol Halaman */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              handlePaginationChange((old) => ({
                ...old,
                pageIndex: old.pageIndex - 1,
              }))
            }
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>

          {/* Tombol Nomor Halaman */}
          {pageNumbers.map((pageIdx) => (
            <Button
              key={pageIdx}
              variant={pageIdx === pageIndex ? "default" : "outline"}
              size="sm"
              onClick={() =>
                handlePaginationChange((old) => ({
                  ...old,
                  pageIndex: pageIdx,
                }))
              }>
              {pageIdx + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              handlePaginationChange((old) => ({
                ...old,
                pageIndex: old.pageIndex + 1,
              }))
            }
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
