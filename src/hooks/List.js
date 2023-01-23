import { useEffect, useState } from "react"
import AllHooks from "./AllHooks"

const List=({getItems})=>{
    const [items,setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
        console.log('Update Items')
    },[getItems])

    return(
        items.map(item => <div key={item}>{item}</div>)
    )
}
export default List