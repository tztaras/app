

import React from "react";
class Comp1 extends React.Component{


    constructor() {
        super();
        this.state = {
            count: 0
        }
}



    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        });
    }

    render() {
        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This button changes state</button>
                </div>
                <div>{this.state.count % 2 === 0 ? 'even' : 'odd' }</div>
                <div>{this.state.count}</div>
                <div><textarea name="" id="" cols="40" rows="3"></textarea></div>
                <div><button>Залишити опінію</button></div>
                <ul></ul>
            </>
        );
    }
}

export default Comp1;