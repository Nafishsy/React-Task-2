import React from "react";
import { Link } from "react-router-dom";

const AllHooks=()=>{
    return(
        <div>
            <Link to="/hooks/usecallback">UseCallback</Link> &nbsp;&nbsp;
            <Link to="/hooks/usecontext">Usecontext</Link> &nbsp;&nbsp;
            <Link to="/hooks/usememo">Usememo</Link> &nbsp;&nbsp;
            <Link to="/hooks/usereducer">Usereducer</Link> &nbsp;&nbsp;
            <Link to="/hooks/useref">Useref</Link> &nbsp;&nbsp;

        </div>
    )
}

export default AllHooks;