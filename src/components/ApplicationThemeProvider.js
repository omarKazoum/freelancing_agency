import {createContext, useEffect, useState} from "react";

export const ApplicationTheme=createContext();
const ApplicationThemeProvider=({children})=>{
    let [isLight,setLight]=useState(false);
    return (<ApplicationTheme.Provider value={{isLight,setLight}} >
        {children}
    </ApplicationTheme.Provider>)

}
export default ApplicationThemeProvider;