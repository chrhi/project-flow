import { ReactNode } from "react";
import DataTable from "react-data-table-component";
import Skeleton from 'react-loading-skeleton';

type Props = {
  title?: string;
  description?: string;
  columns: any[] ;
  data: any[];
  isLoading?: boolean;
};




// Author: Abdullah Chehri
// Component to render a custom table
export const NewAbdullahTable = ({ title, description, columns, data }: Props) => {
  // Functionality for row click and multi-select can be added here

  return (
    <div className="relative  w-full sm:rounded-lg">
      <div className="p-5 w-full  bg-white">
        <h1 className="text-lg font-semibold  text-left text-gray-900">{title || ""}</h1>
        <p className="mt-1 text-sm font-normal text-gray-500">{description || ""}</p>
      </div>
      <DataTable
       className="!w-full"
        onRowClicked={(row) => {
          console.log(row);
        }}
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        
        pointerOnHover
      />
    </div>
  );
};
