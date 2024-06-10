import React,{useState} from "react";
function Count(){
   
    const[cnt,setCount]=useState(0);
    const Increase=()=>{
        setCount(cnt+1);
    }
    const Reset=()=>{
        setCount(0);
    }
    return(
       <div>
        <h1 className="display">{cnt}</h1>
        <div className="button">
            <button onClick={Reset}>Reset</button>
            <button onClick={Increase}>Increase</button>
        </div>
       </div>
    )
}
export default Count;