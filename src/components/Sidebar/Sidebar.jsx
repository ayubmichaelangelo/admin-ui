import { Link } from "react-router-dom";
import './sidebar.scss'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Person2Icon from '@mui/icons-material/Person2';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';  
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Sidebar = () => {
  return <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <SpaceDashboardIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
        <Person2Icon className="icon"/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
        <Inventory2Icon className="icon"/>
          <span>Products</span>
        </li>
      </Link>
      <li>
        <FilterFramesIcon className="icon"/>
        <span>Orders</span>
      </li>
      <p className="title">USER</p>
      <li>
        <AccountBoxIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li>
        <PowerSettingsNewIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  
};

export default Sidebar;