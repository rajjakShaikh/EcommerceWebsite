import React from 'react'
import Header from './Header'

function Service() {
  function handleChange(){
  alert("event called");
}
  return (
    <div>
     <Header/>
     <h1> hello serve page </h1>

     <button onClick={handleChange}>click me </button>

    </div>
  )
}

export default Service