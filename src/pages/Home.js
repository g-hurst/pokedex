import React from 'react';
import Card from '../componenets/Card';
import PokiApiHook from '../PokiApiHook';
import '../style/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleResponse = this.handleResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = { pokemon: [], offset: 0 };
    }

    handleResponse(response) {
        const responsePokemon = response.results.map((item) => (
            <div className="card-link" key={item.name}>
                <a href={`/${item.name}`}><Card name={item.name} url={item.url} /></a>
            </div>
        ));
        this.setState((prevState) =>
        ({
            pokemon: prevState.pokemon.concat(responsePokemon),
            offset: prevState.offset + 25
        })
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
        const url = `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${this.state.offset}`;
        PokiApiHook(url)
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    render() {
        const someJSX =
            <div>
                <div className='cardArray'>
                    {this.state.pokemon}
                </div>
                <br />
                <button onClick={this.getAPIData} className='load-button'>click to load more</button>
            </div>;

        return someJSX;
    }
}

export default Home;