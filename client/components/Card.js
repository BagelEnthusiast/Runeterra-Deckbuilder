import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    console.log(this.props.data.assets[0].gameAbsolutePath)
    return (
      <div id="card">
        <img src={`${this.props.data.assets[0].gameAbsolutePath}`} width="232" height="361"></img>
        {/* <p>{this.props.data.region}</p> */}
      </div>
    )
  }
}
