import React, { useState } from 'react'

const Async = () => {
    const [count, setCount] = useState(1);
    const [sum, setSum] = useState(0)

    function increase(value){
        setCount(value*count)
        setSum(count+sum)
    }

    function increase1(){
        setCount(count +1)      //2
        setCount(count +1)      //2
    }

    function increase2(){
        setCount((count)=> count+1)     //2
        setCount((count)=>count+1)      //3--> no name function first execute the change the value of count and value updated
    }
  return (
    <div>
      <h1>count: {count}</h1>
      {/* <button onClick={()=>{
        console.log("count", count)  //0 => sync
        setCount(count+1)               //1=>async 
      console.log("count", count)       //0=>sync
      } 
      }>Click Me</button> */}

      <button onClick={()=>increase1(100)}>increase</button>



    </div>
  )
}

export default Async
