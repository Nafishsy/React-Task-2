import { useMemo, useState } from "react"
import AllHooks from "./AllHooks"

const UseMemo=()=>{

    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)
    
    const doubleNum = useMemo(() =>{

        return slowFunction(number)
    },[number])

    const theme = {
        backgroundColor: dark ? '#333' : '#CCC',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

    return(
        <div>
            <AllHooks/>
            <h1>Use Memo</h1>

            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />

            <button onClick={ () => setDark(!dark)}>
                Toggle Theme
            </button>

            <div style={theme}>{doubleNum}</div>

            
        </div>
    )
}
export default UseMemo


const slowFunction=(num)=>{
    
      
    for (let i = false; i < 1e9; i++) {        
    }
    // alert('Aikhane ashlo')
    return num*2;
}