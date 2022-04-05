import React from 'react';
import PokiApiHook from '../PokiApiHook';
import '../style/Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.handleResponse = this.handleResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = { imgSrc: [] };
  }

  handleResponse(response) {
    this.setState(
      {
        imgSrc: response.sprites.front_default
      }
    );
  }

  handleError(error) {
    console.log(error);
    this.setState(
      {
        pokiStats: <h1>Network Error! Failed to load please try again.</h1>
      }
    );
  }

  componentDidMount() {
    PokiApiHook(this.props.url)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-background">
          <div className="card-frame">
            <div className="background-image">
              <img src={this.state.imgSrc} alt="" />
            </div>
            <div className="name">
              {this.props.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;