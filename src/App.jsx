import { useState } from "react";
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

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  
  const NotRequireAuth = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route
                path="new"
                element = {<New inputs = {userInputs} title = "Add new user" />}
                />
              <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="products">
                <Route index element = {<List />}></Route>
                <Route path=":productId" element = {<Single />}></Route>
                <Route
                path="new"
                element = {<New inputs = {productInputs} title = "Add new user" />}
                />
                <Route path="new" element = {<New />}></Route>
            </Route>
            <Route path="mylist" element={<MyList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
