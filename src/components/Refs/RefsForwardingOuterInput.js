import React, { Component } from 'react'
import RefsForwardingInput from './RefsForwardingInput'

class RefsForwardingOuterInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    clickHandler = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <hr />
                <h2>#30 Refs Forwarding</h2>
                <RefsForwardingInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>      
            </div>
        )
    }
}

export default RefsForwardingOuterInput
