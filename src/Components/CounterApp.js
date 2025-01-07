import React, {useState} from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
    <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      {/* <h2>{count}</h2> */}
      <button onClick={()=>setCount(count-1)}>dec</button>
      {/* <h2>{count}</h2> */}
      <button onClick={()=>setCount(0)}>reset</button>
      
    </div>
  )
}

export default CounterApp
