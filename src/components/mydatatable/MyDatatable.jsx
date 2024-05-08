import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./mydatatable.scss";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Coffee"},
  { id: 2, name: "Non Coffee"},
  { id: 3, name: "Cake"},
  { id: 4, name: "Snack"},
  { id: 5, name: "Tea" },
  { id: 6, name: "Milkshake" },
  { id: 7, name: "Main Course"},
  { id: 8, name: "Dessert"},
  { id: 9, name: "Soft Drink"},
];

const MyDatatable = ({ title }) => {
  return (
    <div className="datatable">
      <div className="datatableTitle">{title}</div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;