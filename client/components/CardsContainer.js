import React, { Component } from 'react'
import Card from './Card';

export default class CardsContainer extends Component {
  render() {
    const cardComponents = [];
    this.props.cards.forEach((card, index) => {
      cardComponents.push(<Card
                            key={index}
                            data={card}
                            onClick={this.props.handleCardClick}
                          />)
    })
    return (
      <div>
        {cardComponents}
      </div>
    )
  }
}
