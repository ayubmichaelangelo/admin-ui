import "./mylist.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import MyDatatable from "../../components/mydatatable/MyDatatable"

const MyList = () => {
    return (
      <div className="mylist">
        <Sidebar />
        <div className="mylistContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
          </div>
  
          <div className="datatable">
            <MyDatatable title="All Data" />
          </div>
        </div>
      </div>
    );
  };
export default MyList;