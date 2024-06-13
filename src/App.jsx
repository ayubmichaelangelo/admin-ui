import { useState } from "react";
import "./style/dark.scss";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import List from "./pages/list/list";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import MyList from "./pages/MyList/MyList";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";


function App() {

  const { darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const NotRequireAuth = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
            <Route path="login" element={<NotRequireAuth>{<Login />}</NotRequireAuth>}></Route>
            <Route path="users">
            <Route index element={<RequireAuth><List /></RequireAuth>}></Route>
            <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}
                />
              <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="products">
            <Route index element={<RequireAuth><List /></RequireAuth>}></Route>
            <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>}></Route>
                <Route
                path="new"
                element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>}
                />
                <Route path="new" element = {<New />}></Route>
            </Route>
            <Route path="mylist">
            <Route index element={<RequireAuth><MyList /></RequireAuth>}></Route>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
