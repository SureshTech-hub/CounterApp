// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">
            The Button has been clicked{' '}
            <span className="counter-value">{count}</span> times
          </h1>
          <p className="caption">Click the button to increase the count!</p>
          <button type="button" className="button" onClick={this.onClickMe}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
