import React, {useState} from 'react'

const Form1 = () => {
    const [text, setText] = useState()


  return (

    <div>
      <form>
        <input type='text' placeholder='type anything...'  onChange={(e)=> setText(e.target.value)}/>
       
      </form>
      { text && <p>  hello {text}!</p>}
    </div>
  )
}

export default Form1
