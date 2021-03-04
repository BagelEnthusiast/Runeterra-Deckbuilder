import React, { Component } from 'react'

export default class Inspector extends Component {
  render() {
    return (
      <div>
        <img src={`${this.props.data.assets[0].fullAbsolutePath}`}></img>
      </div>
    )
  }
}
