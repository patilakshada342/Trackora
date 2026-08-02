import React from 'react'
import { createContext,useContext,useEffect,useState } from 'react'

function ThemeContext() {

    const ThemeContext = createContext();

    export const ThemeProvider = ({childern}) => {

        const [theme,setTheme] = useState(
            localStorage.getItem("theme") || "light"
        );

        useEffect(() =>{
            localStorage.getitem("theme",theme);

            if(theme === "dark"){
                document.documentElement.classList.add("dark");
            }
        }

        )

    }

    <ThemeContext.Provider value="">

    </ThemeContext>
  return (
    <div>
      
    </div>
  )
}

export default ThemeContext
