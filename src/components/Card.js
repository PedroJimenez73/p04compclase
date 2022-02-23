import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div className='card s'>
          {this.props.children}
      </div>
    )
  }
}

export default Card