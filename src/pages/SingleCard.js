import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";

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
    }

    render() {
        return (
            <div>
                <a>the path is {this.props.id}</a>  
            </div>
        );
    }
}

export default attachName(SingleCard);