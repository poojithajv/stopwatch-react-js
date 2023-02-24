// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  onStartButton = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  onStopButton = () => {
    clearInterval(this.timerId)
  }

  onResetButton = () => {
    clearInterval(this.timerId)
    this.setState({
      seconds: 0,
    })
  }

  showTime = time => {
    let minutes = parseInt(time / 60, 10)
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    let seconds = time - 60 * minutes
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutes}:${seconds}`
  }

  render() {
    const {seconds} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-card-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer"
              />
              <h1 className="timer-heading">Timer</h1>
            </div>
            <h1 className="time">{this.showTime(seconds)}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="button start-button"
                onClick={this.onStartButton}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
