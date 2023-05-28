import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Entry.css"
import { TokenContext } from "../context/TokenContext";
import { UserContext } from "../context/UserContext";


const Entry = function(){
    const [user, setUser] = useState({
        email: "", 
        password: ""
    })

    const {token, setToken} = useContext(TokenContext)

    const {userAuth, setUserAuth} = useContext(UserContext)

    const navigate = useNavigate()
    
    const handleSubmit = async ()=> {
        try{

            const response = await axios.post("http://localhost:8080/login", user)
            setToken(response.data.token)
            setUserAuth({
                name: response.data.name,
                email: user.email
            })
            console.log(response.data)
            navigate("/mainPage") // пока что этой страницы нет, потому что вы еще ее не сделали
        }catch(error){
            console.log("error", error)
        }
    }

    return(
        <div className="entry-main">
            <h2>Entry</h2>
            <form>
                <input type="text" id="login" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required placeholder="email"/>
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required placeholder="password"/>
                <button id="entry"
                onClick={(event)=>{
                    event.preventDefault()
                    handleSubmit()
                }}>Entry</button>            
            </form>
            <Link to="/Registration">Wanna create an account?</Link>
        </div>)
}

export default Entry;