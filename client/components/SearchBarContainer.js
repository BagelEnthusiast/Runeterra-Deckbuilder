import React, { Component } from 'react'

export default class SearchBarContainer extends Component {
  render() {
    return (
      <div>
        <input onKeyUp={this.props.handleKeyPress} id='search-box' type='text' placeholder='Search by name, keywords, or cost...'/>
      </div>
    )
  }
}
