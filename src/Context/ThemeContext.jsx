import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeContextProvider({childern}){
    const [theme,setTheme]= useState("Light")
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {childern}
        </ThemeContext.Provider>
      
    )
}
export default ThemeContextProvider;