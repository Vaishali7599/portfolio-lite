import React, {useState} from 'react'

const Form2 = () => {
    const [text, setText] = useState();
    const [btnClick, setBtnClick] = useState("");

    // console.log("text", text)

    function implementSubmit(e){
        e.preventDefault();
        setBtnClick(text)
        // setBtnClick(true);
        setText("")
    }


  return (
    <div>
      <form onSubmit={implementSubmit}>
        <input type='text'  placeholder='type anything....'  onChange={(e)=>{
          setText(e.target.value)
          setBtnClick("")
          }}  value={text} />
        <button  type='submit'>submit</button>
      </form>
      {/* {  btnClick==true? <p> hello {text}!</p> : ""} */}

      <p>{btnClick}</p>
    </div>
  )
}

export default Form2
//uncontrolled and controlled --> two way communciation