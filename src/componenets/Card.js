import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {imgSrc: []};
    }
    
    async getAPIData() {
      const url = this.props.url; 
      const response = await fetch(url); 
      const responseJSON = await response.json(); 

      this.setState(
          {
            imgSrc: responseJSON.sprites.front_default
          }
      );
  }
    componentDidMount() {
        this.getAPIData();
    }
    
    render () {
        return (
          <div className="card">
            {this.props.name} <br />
            <img src={this.state.imgSrc} alt="" /> 
          </div>
        );
    }
}

export default Card;