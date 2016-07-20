import React from 'react'
import ReactDOM from 'react-dom'
import Greetings from './greetings'

class App extends React.Component {
  render(){
    return <Greetings name={'A-Reum'} />
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
