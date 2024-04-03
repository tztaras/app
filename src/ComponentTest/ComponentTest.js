
import React, {useState, useEffect} from "react";


function Test2(props) {
    console.log('set state');

    const [s1, set1] = useState(props.arg);

    const buttonHandler = () => {
        console.log('handler');
        let val = s1;
        val++;
        set1(val);
        
        
        
    }

    useEffect (()=> {
        console.log('effect');
    });


    console.log('render 1');

    return (
        <div className="compoTest">
            {console.log('render 2')}
                <section>
                    <h1>Component Test 2</h1>
                    <div><button onClick={buttonHandler}>CLICK</button></div>
                    <div>{s1}</div>
                </section>    
        </div>
    )
}

export default Test2;