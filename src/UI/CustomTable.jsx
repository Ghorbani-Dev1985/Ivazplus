import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useMemo, useState } from "react";

const CustomTable = ({children , headerItems , itemsArray , renderCell}) => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const pages = Math.ceil(itemsArray.length / rowsPerPage);
    const items = useMemo(() => {
     const start = (page - 1) * rowsPerPage;
     const end = start + rowsPerPage;
     return itemsArray.slice(start, end);
   }, [page, itemsArray]);
    return ( 
        <Table
        aria-label="orders"
        bottomContent={
          <div className="flex w-full justify-center">
            {
              pages > 1 && renderCell &&
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              classNames={{
                prev: "rotate-180",
                next: "rotate-180",
                forwardIcon: "rotate-180",
              }}
            />
            }
          </div>
      }
        classNames={{wrapper: "my-6"}}
      >
        <TableHeader>
          {headerItems.map(({ id, label }) => {
            return (<TableColumn key={id}>{label}</TableColumn>)
          })}
        </TableHeader>
        {
          renderCell ?    <TableBody
         items={items}
        >
   {(item) => (
            <TableRow key={item._id}>
               {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              
            </TableRow>
          )}
        </TableBody> : <TableBody items={items}>{children}</TableBody>
        }
     
      </Table>
     );
}
 
export default CustomTable;