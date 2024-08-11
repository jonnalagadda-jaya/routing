import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { Student } from "../typescomponents/types"
import { Table, TableHeader, TableRow, TableCell, TableBody } from "../components/ui/table"
import { getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table"
import { createStudent, getStudent } from "../services/api"
import FormField from "./FormField"

function TableView() {

    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryFn: getStudent,
        queryKey: ["getStudent"],
    })

    console.log("Data", data)

    const createMutation = useMutation({
        mutationFn: createStudent,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getStudent"] })
        }
    })
    function handleSaveStudent(data:Student){
        createMutation.mutate(data)
    }

    // Define columns for the table
    const columns: ColumnDef<Student>[] = [
        {
            header: 'ID',
            accessorKey: 'id',
            cell: (info: any) => info.getValue(),
        },
        {
            header: 'Name',
            accessorKey: 'name',
            cell: (info: any) => info.getValue(),
        },
        {
            header: 'Email',
            accessorKey: 'email',
            cell: (info: any) => info.getValue(),
        },
        {
            header: 'Image',
            accessorKey: 'image',
            cell: (info: any) => <img src={info.getValue()} alt="student" className="h-10 w-10 rounded-full" />
        },
        {
            header: 'Phone Number',
            accessorKey: 'PhNo',
            cell: (info: any) => info.getValue(),
        },
    ]
    const table = useReactTable({
        data: data || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!data || data.length === 0) {
        return <div>No Data available</div>
    }

    return (
        <div>
            {<FormField saveStudent={handleSaveStudent} />}
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableCell key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} className="pl-20">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableView;