import React from "react"

function func(){
  document.write("Hello")
}

function App(){
  return(
    <div>
      <img src="cat_2.jpg" alt="images"></img>
      <br></br>
      <br></br>

      <button onClick={func}>Click Me</button>
    </div>
  )
}

export default App;