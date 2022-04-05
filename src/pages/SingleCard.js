import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import Card from '../componenets/Card';
import PokiApiHook from '../PokiApiHook';
import '../style/SingleCard.css'

function NameHook() {
    const { id } = useParams();
    return id
}

function attachName(Component) {
    return function WrappedComponent(props) {
        const id = NameHook();
        return <Component {...props} id={id} />;
    }
}

class SingleCard extends Component {
    constructor(props) {
        super(props);
        this.handleResponse = this.handleResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = { pokiStats: null }
    }

    handleResponse(response) {
        console.log(response)
        this.setState(() =>
        ({
            pokiStats: response
        }));
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
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
        PokiApiHook(url)
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    render() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
        return (
            <div className='SingleCardContent'>
                <div className="SingleCardCard">
                    <Card url={url} name={this.props.id} />
                </div>
                <div className="stats">
                    <p>Name: {(this.state.pokiStats !== null) ? this.state.pokiStats.name : 'Loading'}</p>
                    <p>Types: {(this.state.pokiStats !== null) ? this.state.pokiStats.types[0].type.name : 'loading'}</p>
                    <p>Height: {(this.state.pokiStats !== null) ? this.state.pokiStats.height : 'loading'}</p>
                    <p>Weight: {(this.state.pokiStats !== null) ? this.state.pokiStats.weight : 'loading'}</p>
                </div>
            </div>
        );
    }
}

export default attachName(SingleCard);