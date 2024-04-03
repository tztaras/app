import React from "react";
import '../Lifecycles/Lifecycles.css';


class Lifecycle extends React.Component {

    constructor(props) {
        console.clear();
        console.log('constructor works');
        console.log(props);
        super();
        this.state = {
            // s1 : 0
            s1: props.arg
        }
    }

    buttonHandler = () => {
        let val = this.state.s1;
        console.log(val);
        val++;
        console.log(val);
        this.setState({ s1: val });
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        return null
        // return ({'s1':props.arg})
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    render() {
        console.log('render 1');

       
        return (
            <div className='lifecycles'>

                {console.log('render 2')}
                <section>
                    <h1>Lifecycles</h1>
                    
                    <div><button onClick={this.buttonHandler}>CLICK</button></div>
                    <div>{this.state.s1}</div>
                </section>    
            </div>
        )
    }
}

export default Lifecycle;