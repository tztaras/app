import React from "react";
import '../Lifecycles/Lifecycles.css';


class Lifecycle extends React.Component {

    constructor(props) {
        console.clear();
        console.log('constructor works');
        console.log(props);
        super();
        // The super() method is used to call the constructor of the parent class. In React components, super(props) is called within the constructor to ensure that the parent class constructor is properly called with the props parameter. If you don't call super(props), this.props will be undefined in the constructor, which can lead to bugs.
        this.state = {
            // s1 : 0
            s1: props.arg,
            s2: props.anthrarg,
            s3: props.shtnofprops
        }
        // let s3 = '201';
        // console.log(s3);
    }

    buttonHandler = () => {
        let val = this.state.s1;
        console.log(val);
        val++;
        console.log(val);
        this.setState({ s1: val });

        let tFa = this.state.s2;
        console.log(tFa);
        tFa += 'ty';
        this.setState({ s2: tFa });

    

        let fnlArg = this.state.s3;
        console.log(fnlArg);
        fnlArg += " <-- that was an array";
        console.log(fnlArg);
        this.setState({s3 : fnlArg})


    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state');
        return null
        // return ({'s1':props.arg})
    }
    // This method is called every time the component is rendered, regardless of the cause of the update (initial mount, prop changes, or state changes).

    componentDidMount() {
        console.log('component did mount');
    }
    // This method is commonly used to perform actions that require interaction with the DOM or external data fetching, such as initializing JavaScript libraries, making API requests, or setting up event listeners.

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
                    <div>{this.state.s2}</div>
                    <div >{this.state.s3}</div>
                    
                    {/* <div>{s2.map(
                        (item, index) => <span key={index.toString()}><b>{item}</b><hr/></span>
                    )}</div> */}
                </section>    
            </div>
        )
    }
}

export default Lifecycle;