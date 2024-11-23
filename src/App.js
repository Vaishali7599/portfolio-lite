// import Navbar from "./components/Navbar.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";


import "./style.css";

const sectionData = [
    {
        heading: "Section 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro, expedita aut laudantium asperiores velit commodi natus mollitia quasi sunt quidem corrupti doloremque ullam consequatur cumque! Harum repellat velit commodi."
    },
    {
        heading: "Section 2",
        description: "Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sint porro, expedita aut laudantium asperiores velit commodi natus mollitia quasi sunt quidem corrupti doloremque ullam consequatur cumque! Harum repellat velit commodi."
    },
    {
        heading: "Section 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro, expedita aut laudantium asperiores velit commodi natus mollitia quasi sunt quidem corrupti doloremque ullam consequatur cumque! Harum repellat velit commodi."
    }
]


const App = () => {
    return (
        <div>
            <Navbar/>
             <About/>
             {
                sectionData.map((value, index)=>{
                    return (
                        <Section key = {index}
                        heading={value.heading}
                        description={value.description}
                    />
                    )
                    
                })
             }
             <Footer />


           


          
        </div>

    )
}
export default App;

//map, filter, reduce => array //for looping in react js
//if else, switch = > ternary, short circuit operator