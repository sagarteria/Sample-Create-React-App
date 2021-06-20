import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

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
                <hr />
                <h2>#27 Memo</h2>
                Outer Component
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default OuterComponent