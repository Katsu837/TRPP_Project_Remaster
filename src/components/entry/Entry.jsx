import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Entry = function(){
    const [user, setUser] = useState({
        login: "", 
        password: ""
    })

    const navigate = useNavigate()
    

    return(
        <div className="entry-main">
            <h2>Entry</h2>
            <form>
                <input type="text" id="login" value={user.login} onChange={event => setUser({...user, login: event.target.value})} required />
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required />
                <button id="entry"
                onClick={(event)=>{
                    event.preventDefault()
                    navigate("/mainPage") // пока что этой страницы нет, потому что вы еще ее не сделали
                }}>Entry</button>            
            </form>
            <Link to="/reg">Wanna create an account?</Link>
        </div>)
}

export default Entry;