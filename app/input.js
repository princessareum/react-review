import React from 'react'

export default const Input = (props) => (
  <div>
    <input
      onChange={props.textInput}
      placeholder="Your Name"
      type="text"
      value={props.name}
      />
  </div>
)
