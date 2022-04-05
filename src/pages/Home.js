import React from 'react';
import Card from '../componenets/Card';
import PokiApiHook from '../PokiApiHook';
import '../style/Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokemon: [], offset: 0};
    }

    async getAPIData() {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${this.state.offset}`; 
        const responseJSON = await PokiApiHook(url);

        const responsePokemon = responseJSON.results.map((item) => (
            <div className="card-link" key={item.name}>
                <a href={`/${item.name}`}><Card name={item.name} url={item.url}/></a>
            </div>
        ));

        this.setState((prevState) =>
            ({                
                pokemon: prevState.pokemon.concat(responsePokemon),
                offset: prevState.offset + 25
            })
        );
    }

    componentDidMount() {
        this.getAPIData();
    }

    render () {
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