import React, { useState } from "react";
import LanguageChanges from "./settingsComponents/LanguageChanges";
import ThemeChanges from "./settingsComponents/ThemeChanges";
import settingIcon from "../image/setting.png"
import "../../styles/Settings.css"
const Settings = () => {


    const [isRotated, setRotated] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const handleClick = (event) => {
        event.preventDefault()
        setRotated(!isRotated)
        setOpen(!isOpen)
    }
    return(
        <div className="settings">
            <img className={isRotated ? "settings-icon rotate-active" : "settings-icon"}src={settingIcon} alt="settings" width="30px" height="30px" onClick = {handleClick}/>
            {isOpen
            ? <div className="open-settings">
                <ThemeChanges/>
                <LanguageChanges/>
                {/*<link className="logOut"/>*/}
            </div>
            : <div></div>}
           
        </div>
    )
}

export default Settings;