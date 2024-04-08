
import React, {useState, useEffect} from "react";


function Test2(props) {
    // let arg = 111;
    console.log('set state');

    const [s1, set1] = useState(props.arg);
    // useState(arg)

    const buttonHandler = () => {
        console.log('handler');
        let val = s1;
        val++;
        set1(val);
        
        
        
    }

    //  in a functional component, you don't use lifecycle methods like componentDidMount. Instead, you use the useEffect hook to achieve similar functionality.

    useEffect (()=> {
        console.log('effect');
    });


    console.log('render 1');

    // useEffect(() => {
    //     console.log('render');
    // });

   

    return (
        <div className="compoTest">
            {console.log('render 2')}
                <section>
                    <h1>Component Test 2</h1>
                    <div><button onClick={buttonHandler}>CLICK</button></div>
                    <div>{s1}</div>
                {/* <div>{s1.map(
                    (item, index) => <span key={index.toString()}><b>{item}</b><hr/></span>
                    )}</div> */}
                </section>    
        </div>
    )
}

export default Test2;