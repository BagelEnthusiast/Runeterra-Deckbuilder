import React, { Component } from 'react'
import Card from './Card';

export default class CardsContainer extends Component {
  render() {
    const cardComponents = [];
    console.log(this.props.cards)
    this.props.cards.forEach((card, index) => {
      cardComponents.push(<Card key={index} data={card}/>)
    })
    return (
      <div>
        {cardComponents}
      </div>
    )
  }
}
