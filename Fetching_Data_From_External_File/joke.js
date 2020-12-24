import React from "react"

const Joke =(props) =>{
  return(
    <div className="joke" style={{fontFamily:"cursive",color:"orange",backgroundColor:"black"}}>
      <p >
         Question:{props.question}
      </p>
      <p>
        Punchline:{props.punchline}
      </p>
    </div>
  )
};

export default Joke;