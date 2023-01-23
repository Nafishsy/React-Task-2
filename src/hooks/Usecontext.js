import AllHooks from "./AllHooks"
import { createContext, React,useContext,useState } from "react"
import ChildCompo from "./ChildCompo"



const UseContext=()=>{
    
    const [darkTheme, setDarkTheme] = useState(true)
    
    
    const toggleTheme = () =>{
        setDarkTheme( prevData => !prevData)
        
    }
    
    return(
        <div>
            <AllHooks/>

            <h1>Use context</h1>

            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ChildCompo/>
            </ThemeContext.Provider>

        </div>
    )
}
export default UseContext
export const ThemeContext = createContext()