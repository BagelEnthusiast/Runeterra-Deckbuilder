import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SearchBarContainer from './SearchBarContainer';
import CardsContainer from './CardsContainer';
import styles from '../scss/application.scss';
import Inspector from './Inspector';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      filteredCards: [],
      searchText: '',
      inspectorMode: false,
      inspectedCard: {}
    }
    this.filterCards = this.filterCards.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  componentDidMount() {
    this.getCards()
  }

  getCards() {
    
    fetch('/cards')
    .then(response => response.json())
    .then(data => {
      // console.log(this.state.searchText)
      if (this.state.searchText === '') {
        this.setState({...this.state, filteredCards: data, cards: data})
      } else {
        this.setState({...this.state, cards: this.findCard(this.state.searchText)})
      }

    })
  }

  handleCardClick(e) {
    const targetCard = this.findCard(e.target.id)
    
    this.setState({...this.state, inspectorMode: true, inspectedCard: targetCard})
  }

  handleKeyPress(e) {
    
    const oldText = this.state.searchText
    const newText = e.target.value

    this.setState({...this.state, searchText: newText})
    
    if (this.state.inspectorMode === true) {
      return this.setState({...this.state, inspectorMode: false})
    }
    
    if (newText.length < oldText.length) return this.getCards()
    
    const newCards = this.filterCards(newText)

    this.setState({...this.state, filteredCards: newCards})
  }

  findCard(id) {
    return this.state.filteredCards.find(card => card.cardCode === id)
  }

  filterCards(text) {
    console.log('current query:', text)
    const wordsArray = text.split(' ')
    console.log(wordsArray)
    
    let newCards = this.state.cards.filter(card => {
      const regex = new RegExp(text, 'i')
      return (regex.test(card.name) ||
              regex.test(card.descriptionRaw) ||
              regex.test(card.type) ||
              regex.test(card.subtype) ||
              regex.test(card.region) ||
              regex.test(...card.keywords))
    })
    return newCards
  }

  render() {
  
    if (!this.state.inspectorMode) {
      return (
        <div>
          <SearchBarContainer 
            handleKeyPress={this.handleKeyPress}
            searchText={this.state.searchText}
          />
            <div className="card-container">
              <CardsContainer handleCardClick={this.handleCardClick} cards={this.state.filteredCards}/>
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <SearchBarContainer 
            handleKeyPress={this.handleKeyPress}
            searchText={this.state.searchText}
          />
          <div id="inspector-body">
            <Inspector data={this.state.inspectedCard}/>
          </div>
        </div>
      )
    }
  }

}