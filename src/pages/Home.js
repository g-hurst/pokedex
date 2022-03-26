import React from 'react';
import Card from '../componenets/Card';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.loadMoreClick = this.loadMoreClick.bind(this);
        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokemon: [], offset: 0};
    }

    loadMoreClick(){
        console.log("nice");
        this.setState({offset: this.offset + 50});
        this.getAPIData();
        this.setState({});

    }

    async getAPIData() {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${this.state.offset}`; 
        const response = await fetch(url); 
        const responseJSON = await response.json(); 

        const responsePokemon = responseJSON.results.map((item) => <Card name={item.name} url={item.url} key={item.name}/>);

        this.setState(
            {
                pokemon: responsePokemon 
            }
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
                <button onClick={this.loadMoreClick}>click to load more</button>
                </div>;

        return someJSX;
    }
}

export default Home;