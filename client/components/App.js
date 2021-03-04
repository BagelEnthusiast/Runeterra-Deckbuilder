import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SearchBarContainer from './SearchBarContainer';
import CardsContainer from './CardsContainer';
import styles from '../scss/application.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch('/cards')
      .then(response => response.json())
      .then(data => this.setState({cards: data}))
  }

  render() {
    return (
      <div>
        <SearchBarContainer/>
          <div id="card-container">
            <CardsContainer cards={this.state.cards}/>
          </div>
      </div>
    )
  }

}