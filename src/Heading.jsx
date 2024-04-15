import React from 'react'

const Heading = (props) => {
  // console.log(props);
  return (
    <h1 className="text-3xl font-bold  mb-5 font-heading">{props.text}</h1>
    
  )
}

export default Heading