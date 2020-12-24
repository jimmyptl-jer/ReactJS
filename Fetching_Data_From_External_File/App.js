import React from "react"

import Joke from "./joke"
import jokeData from "./jokeData";


const App =() =>{
  const jokeComponents = jokeData.map(joke =>{
    return(
      <Joke key={joke.id}
      question={joke.question}
      punchline={joke.punchline}></Joke>
    )

  })

  return(
    <div>
     {
       jokeComponents
     }
    

    </div>
    
  )
};

export default App;
