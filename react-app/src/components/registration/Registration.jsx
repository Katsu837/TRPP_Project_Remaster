import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css"



const Registration = function(){
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm: "",
        email: ""
    })

    const handleSubmit = async () =>{
        try{
            const response = await axios.post("http://localhost:8080/register", 
            {
                "name": user.name,
                "email": user.email,
                "password": user.password
            })
            console.log("Succeed")
        }catch(error){
            console.log("Error", error)
        }
    }

    

    const [incorrInp, setIncorrInp] = useState(false)

    const navigate = useNavigate()

    return(
        <div className="registration-main">
            <h2>Registration</h2>
            <form>
                <input type="text" id="login" value={user.name} onChange={event => setUser({...user, email: event.target.value})} required placeholder="name"/>
                <input type="email" id="email" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required placeholder="email"/>
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required placeholder="password"/>
                <input type="password" id="confPassword" value={user.confirm} onChange={event => setUser({...user, confirm: event.target.value})} required placeholder="confirm password"/>
                {incorrInp
                    ? <div>Пароли не совпадают</div>
                    : <div></div>
                }
                <button id="register"
                    onClick={(event) => {
                        event.preventDefault()
                        if(user.password !== user.confirm) setIncorrInp(true)
                        else {
                            setIncorrInp(false)
                            console.log(user)
                            handleSubmit()
                            // axios.post("./users", user) // типа запрос который ПОКА не работает
                            navigate("/mainPage")
                        }
                    }}
                >Register</button>
            </form>
            <Link to="/">Already have an account?</Link>
        </div>)
}

export default Registration;