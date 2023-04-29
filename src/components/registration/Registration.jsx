import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/Registration.css"


const Registration = function(){
    const [user, setUser] = useState({
        login: "",
        password: "",
        confirm: "",
        email: ""
    })

    const [incorrInp, setIncorrInp] = useState(false)

    const navigate = useNavigate()

    return(
        <div className="registration-main">
            <h2>Registration</h2>
            <form>
                <input type="text" id="login" value={user.login} onChange={event => setUser({...user, login: event.target.value})} required />
                <input type="email" id="email" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required />
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required />
                <input type="password" id="confPassword" value={user.confirm} onChange={event => setUser({...user, confirm: event.target.value})} required />
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
                            axios.post("./users", user) // типа запрос который ПОКА не работает
                            navigate("/mainPage")
                        }
                    }}
                >Register</button>
            </form>
            <Link to="/">Already have an account?</Link>
        </div>)
}

export default Registration;