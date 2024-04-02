import React from "react";
import '../Lifecycles/Lifecycles.css';

class Lifecycle extends React.Component {

    constructor() {
        console.clear();
        console.log('constructor works');
        super();
        this.state = {
            s1 : 0
        }
    }

    buttonHandler = () => {
        console.log('work');
    }

    render() {
        console.log('render 1');
        return (
            <div className='lifecycles'>

                {console.log('render 2')}
                <section>
                    <h1>Lifecycles</h1>
                    <div><button onClick={this.buttonHandler}>CLICK</button></div>
                </section>    
            </div>
        )
    }
}

export default Lifecycle;