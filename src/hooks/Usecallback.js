import React, { useCallback, useState } from "react"
import AllHooks from "./AllHooks"
import List from "./List"
const UseCallback=()=>{

    const [number,setNumber] = useState(0)
    const [darkTheme, setDarkTheme] = useState(true)



    const getItems = useCallback(() =>{
        return [number,number+1,number+2]
    },[number])


    const theme = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return(
        <div style={theme}>
            <AllHooks/>
            <h1>UseCallback</h1>

            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={ () => setDarkTheme(!darkTheme)}>
                Toggle Theme
            </button>
            <List getItems={getItems}/>
        </div>
    )
}
export default UseCallback