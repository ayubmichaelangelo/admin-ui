import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/Chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
        </div>
        <div className="charts">
            <Chart type = "order" aspect = {2/1} />
            <Chart type = "earning" aspect = {2/1} />
        </div>
      </div>
    </div>
  );
};

export default Home;