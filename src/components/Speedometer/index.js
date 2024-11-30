import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(preveValue => ({count: preveValue.count + 10}))
    } else {
      this.setState({count: 200})
    }
  }

  onDecrement = () => {
    const {count} = this.state

    const a =
      count > 0
        ? this.setState(preveValue => ({count: preveValue.count - 10}))
        : 0
  }

  render() {
    const {count} = this.state

    return (
      <div className="background-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">
          Speed is <span className="span-element">{count}mph</span>
        </h1>
        <p className="paragraph-element">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="brake-button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
