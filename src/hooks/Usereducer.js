import { useReducer, useState } from "react"
import AllHooks from "./AllHooks"


const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

const reducer = (state,action) => {
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return {count: state.count - 1 }
        default:
            return state
    }
}

const UseReducer =()=>{

    const [state,dispatch] = useReducer(reducer, {count: 0})

    const inc = () =>{
        //setCount(count +1)
        dispatch({ type: ACTIONS.INCREMENT})
    }

    
    const dec = () =>{
        // setCount(count-1)
        dispatch({ type: ACTIONS.DECREMENT})

    }


    return(
        <div>
            <AllHooks/>
            <h1>UseReducer</h1>


            <button onClick={dec}>-</button>
            <span>{state.count}</span>
            <button onClick={inc}>+</button>

        </div>
    )
}
export default UseReducer