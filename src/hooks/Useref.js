import { useRef, useState } from "react"
import AllHooks from "./AllHooks"

const UseRef =()=>{
    
    const [name,setName] = useState('')
    const inputRef = useRef()

    const focus = () =>{
        inputRef.current.focus()
    }
    return(
        <div>
            <AllHooks/>
            <h1>UseRef</h1>

            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}
            />
            <br></br>

            <span>My name is {name}</span>
            <button onClick={focus}>Focus</button>
            
        </div>
    )
}
export default UseRef