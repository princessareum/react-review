import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './greetings'
import Input from './input'
import Button from './button'

class App extends React.Component {
  render(){
    return (
      <div>
        <Input />
        <Button />
        <Greetings />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
