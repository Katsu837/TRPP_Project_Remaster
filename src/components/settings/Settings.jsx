import React from "react";
import LanguageChanges from "./settingsComponents/LanguageChanges";
import ThemeChanges from "./settingsComponents/ThemeChanges";
import settingIcon from "../image/setting.png"
import "../../styles/Settings.css"
const Settings = () => {

    return(
        <div className="settings">
            <img src={settingIcon} alt="settings" width="30px" height="30px" />
           {/*<ThemeChanges/>*/}
           {/*<LanguageChanges/>*/}
           {/*<link className="logOut"/>*/}
        </div>
    )
}

export default Settings;