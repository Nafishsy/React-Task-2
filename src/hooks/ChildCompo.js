import AllHooks from "./AllHooks"
import { React, useContext } from "react"
import { ThemeContext } from "./Usecontext"

const ChildCompo =()=>{

    const darkTheme = useContext(ThemeContext)
    
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return(
        <div style={themeStyles}>            
            
            <h1>Child Component of UseContext</h1>
            

        </div>
    )
}
export default ChildCompo