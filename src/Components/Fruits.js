import React, {useState} from 'react'

const Fruits = () => {
    const [newFruit, setNewFruit] = useState("")
    const [fruits, setFruits] = useState(["apple", "banana", "orange"])

    function implementSubmit(e){
        e.preventDefault();
        
        setFruits([...fruits, newFruit ])
        setNewFruit("")

    }

  return (
    <div>
      <form onSubmit={implementSubmit}>
        <input type='text' placeholder='enter the fruit name' onChange={
          (e)=>setNewFruit(e.target.value)}
          value={newFruit}
          />
        <button type='submit'>submit</button>
      </form>
      {/* {
        fruit.join(", ")
      } */}
      <ol>
        {
          fruits.map(items=>(
            <li>{items}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default Fruits
