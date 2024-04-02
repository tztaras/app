import React from "react";
import '../Lifecycles/Lifecycles.css';

class Lifecycle extends React.Component {

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