import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./components/entry/Entry";
import Registration from "./components/registration/Registration";
import './styles/index.css'
import MainPage from "./components/MainPage";
import CalendarList from "./components/Friendsaddsearchopen/CalendarList";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Entry/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route>
          <Route path="/MainPage" element={<MainPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
      <CalendarList />
       <Profile/>
      </div>
  );
}

export default App;
