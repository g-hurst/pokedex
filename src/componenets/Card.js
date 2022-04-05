import React from 'react';
import '../style/Card.css';
import loading from '../images/loading.png'

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.getAPIData = this.getAPIData.bind(this);
    this.state = { imgSrc: [] };
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

  render() {
    return (
      <div className="card-container">
        <div className="card-background">
          <div className="card-frame">
            <div className="background-image">
              <img src={this.state.imgSrc} alt={loading} />
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