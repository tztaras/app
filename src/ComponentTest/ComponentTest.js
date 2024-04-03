
import React from "react";


function Test2() {
    console.log('render 1')
    return (
        <div className="compoTest">
            {console.log('render 2')}
                <section>
                    <h1>Component Test 2</h1>
                    {/* <div><button onClick={this.buttonHandler}>CLICK</button></div>
                    <div>{this.state.s1}</div> */}
                </section>    
        </div>
    )
}

export default Test2;