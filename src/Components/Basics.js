import React, {useState} from "react";

const Basics=()=>{
 let  [count, setCount] = useState(0) //usestate is used to create variable in react store in a form of array of 2, one is variable name and sec is function it update the variable every time not change the value of the variable...................useState variable changing then it re render every time u change the value in side the component


    return (
        <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>

        </div>
    )
}
export default Basics;