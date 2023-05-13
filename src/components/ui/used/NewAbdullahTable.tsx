import { ReactNode, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from "@tremor/react";
import { ChevronLeftIcon , ChevronRightIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  headers: string[];
  body: ItemTable[];
  showHeaders?: boolean;
  Action?: boolean;
  wrap?: boolean;
  PlusButton?: ReactNode;
  ActionName?: string;
  isLoading: boolean;
  itemsPerPage: number;
};

export type ItemTable = {
  id: string;
  properties: Array<string | ReactNode | any>;
  callback: (id: string) => void;
};

export const NewAbdullahTable = ({
  title,
  description,
  headers,
  body,
  showHeaders = true,
  wrap = true,
  PlusButton,
  Action = true,
  ActionName = "Delete",
  isLoading,
  itemsPerPage,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the body array based on the current page
  const paginatedBody = body.slice(startIndex, endIndex);

 

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const totalPages = Math.ceil(body.length / itemsPerPage);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <Table className="mt-5">
        <TableHead>
          <TableRow className={`text-xs text-gray-700 uppercase bg-gray-50`}>
            {headers?.map((item) => (
              <TableHeaderCell key={item}>
                {isLoading ? <Skeleton /> : item}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        {isLoading && (
          <TableBody>
            {["one", "two", "tree", "four", "five"].map((item) => (
              <TableRow key={item}>
                {headers.map((item) => (
                  <TableCell
                    key={item}
                    scope="row"
                    className={`px-6 py-4 font-medium text-gray-900`}
                  >
                    <Skeleton style={{ width: "50%" }} count={2} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        )}
        {!isLoading && (
          <TableBody>
            {paginatedBody?.map((current, index) => (
              <TableRow
                key={index + 999}
                className="hover:bg-gray-200 transition-all duration-75"
              >
                {current.properties.map((item) => (
                  <TableCell
                    key={index + 45679684623}
                    className={`px-6 py-4 font-medium text-gray-900 !whitespace-normal`}
                  >
                    {isLoading ? <Skeleton /> : item}
                  </TableCell>
                ))}
                {Action && (
                  <TableCell className={`px-6 py-4 text-right`}>
                    <button
                      onClick={() => current.callback(current?.id)}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {ActionName}
                    </button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <div className="bg-white my-2 col-span-6 h-10 flex w-full justify-end gap-x-4 text-right">
      <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-lg px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
            <ChevronLeftIcon />
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center rounded-lg px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          Next
          <ChevronRightIcon />
        </button>
        {PlusButton && PlusButton}
      </div>
    </div>
  )
  }
