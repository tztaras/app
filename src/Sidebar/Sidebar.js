import './Sidebar.css';
import links from '../data/articles.json';
import React from 'react';

function Sidebar() {

    let a = 33;

    let textInput = React.createRef();
    let textOutput = React.createRef();

    function f1(number) {
        console.log('f1 '+ number);
    }

    function f2(number) {
        console.log('mousemove '+ number);
    }

    function showInput(event) {
        console.log('input');
        console.log(event.target.value);
        console.log(textInput.current.value);
        // console.log(this.value);
        textOutput.current.innerHTML = textInput.current.value;
    }
    return (
        <div className="sidebar">
            
            <section>
                <h1>HAPPENING</h1>
                <h2>Button</h2>
                <button onClick={()=>f1(1)}>Push</button>
                <h2>Double click + mousemove</h2>
                <div className="cyanbox" onDoubleClick={f1} onMouseMove={() => f2(2)}></div>
                <h3>Input</h3>
                <input type="text" onInput={showInput} ref={textInput} defaultValue='lol' />
                
                <p ref={textOutput}></p>
            </section>

            <nav>
                {/* <ul>
                    {links.map(li2 =>
                        <li key={li2}>
                            <a href={li2.hlink}>{li2.title}</a>
                        </li>)}
                </ul> */}
            </nav>
            
            
        </div> 
    )
}

export default Sidebar;