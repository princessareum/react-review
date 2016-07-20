import React from 'react'
import '../styles/styles.css'

function Greetings(props){
  return (
    <div className="greetings">Hello {props.name}</div>
  )
}

module.exports = Greetings;

// export default const Greetings = (props) =>
  // <div className="greetings">Hello {props.name}</div>
