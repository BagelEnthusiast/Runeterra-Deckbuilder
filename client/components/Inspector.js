import React, { Component } from 'react'

export default class Inspector extends Component {
  render() {
    return (
      <div id='inspector-container'>
        <img className='big-image' src={`${this.props.data.assets[0].fullAbsolutePath}`} ></img>
        <div className='card-info-div'>
          <p>{this.props.data.flavorText}</p>
        </div>
      </div>
    )
  }
}
