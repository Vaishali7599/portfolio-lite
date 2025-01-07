import React, {useState} from 'react'

const Object = () => {
    const [coins, setCoins] = useState({gold: 0, silver: 0, bronze: 0});
  return (
    <div>
    <h1>Gold: {coins.gold} silver: {coins.silver} bronze: {coins.bronze}</h1>
    <button onClick={()=>setCoins({...coins, gold: coins.gold+1})}>gold</button>
    <button onClick={()=>setCoins({...coins, silver: coins.silver+1})}>silver</button>
    <button onClick={()=>setCoins({...coins, bronze: coins.bronze+1})}>bronze</button>



      
    </div>
  )
}

export default Object

