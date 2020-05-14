// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  // This component has an initial state property called timesClicked, which is  initially defined as 0.

  // The component renders out a button with a label that shows the timesClicked   value. This means that, at the start, your button should just say 0.

  // Whenever the button is clicked, update the state by incrementing the  timesClicked by 1.
  state = {
    timesClicked: 0
  }

  handleClick = () => (
    this.setState(previousState => {
    return {
      timesClicked: previousState.timesClicked + 1
    }
  }, console.log(this.state.timesClicked)))

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
