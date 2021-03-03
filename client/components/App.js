import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/cards')
      .then(response => response.json())
      .then(cards => console.log(cards))
  }

  render() {
    return (
      <div>
        Hello Worl
      </div>
    )
  }

}