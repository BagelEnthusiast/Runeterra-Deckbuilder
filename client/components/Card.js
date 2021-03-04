import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img onClick={this.props.onClick} id={this.props.data.cardCode} src={`${this.props.data.assets[0].gameAbsolutePath}`} width="232" height="361"></img>
        {/* <p>{this.props.data.region}</p> */}
      </div>
    )
  }
}
