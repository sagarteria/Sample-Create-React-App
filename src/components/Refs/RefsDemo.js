import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
        if(this.cbRef) {
            this.cbRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <hr />
                <h2>#28 Refs</h2>
                {/*  1. Normal Approach */}
                <h3>1. Normal Approach</h3>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
                <h3>2. Callback Ref Approach, not used much now though</h3>
                {/* 2. Callback Ref Approach, not used much now though */}
                <input type="text" ref={this.setCbRef} />
            </div>
        )
    }
}

export default RefsDemo
