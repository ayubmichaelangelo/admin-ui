import React from "react";
import "./mylist.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Datatable from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";

const Mylist = ({ columns }) => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="categories" />
        </div>
        <div className="datatableTitle">
          
        </div>
        <div className="datatable">
          <Datatable columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Mylist;