import React, { Component } from 'react'
import InputRefsClass from './InputRefsClass'

class FocusInputRefsClass extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    clickHandler = () => {
        this.componentRef.current.focusInput();
    }
    render() {
        return (
            <div>
                <hr />
                <h2>#29 Refs with Class Components</h2>
                <InputRefsClass ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInputRefsClass
