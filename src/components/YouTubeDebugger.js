// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  // Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

  // Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
  
  // changeBitrate = () => {
  //   this.setState({
  //     settings: {...this.state.settings, bitrate: 12}
  //   })
  // }

  // pass setState method a callback 
  changeBitrate = () => {
    this.setState(previousState => {
      return {
        settings: {...previousState.settings, bitrate: 12}
      }
    })
  }

  changeResolution = () => {
    this.setState(previousState => {
      return {
        settings: {...previousState.settings, video: { resolution: '720p'}}
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }
}
