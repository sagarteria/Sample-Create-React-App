import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComponents from './PureComponents';

class OuterComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'name1'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'name1'
            })
        }, 2000)
    }

    render() {
        console.log('***Outer Component Render****')
        return (
            <div>
                <h2>#26 Pure Components</h2>
                Outer Component
                <RegularComponent name={this.state.name}></RegularComponent>                
                <PureComponents name={this.state.name}></PureComponents>
            </div>
        )
    }
}

export default OuterComponent
