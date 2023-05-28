import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/entry/Entry";
import Registration from "./components/registration/Registration";
import './styles/index.css'
import MainPage from "./components/MainPage";
import { TokenContext } from "./components/context/TokenContext";
import { UserContext } from "./components/context/UserContext";


function App() {
  const [token, setToken] = useState("")
  const [userAuth, setUserAuth] = useState(
    {
      name: "",
      email: ""
    }
  )

  return (
      <TokenContext.Provider value={{
        token,
        setToken
      }}>
        <UserContext.Provider value={{
          userAuth,
          setUserAuth
        }}>
        <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<Entry/>}></Route>
            <Route path="/Registration" element={<Registration/>}></Route>
            <Route path="/MainPage" element={<MainPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
      </TokenContext.Provider>
  );
}

export default App;
