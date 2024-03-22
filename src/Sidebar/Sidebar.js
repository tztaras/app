import './Sidebar.css';
import links from '../data/articles.json';
import React from 'react';
import { useState } from 'react';

function Sidebar() {

    let a = 33;
    let cd = 'cadetblue';
    let textInput = React.createRef();
    let textOutput = React.createRef();
    const [output, setOutput] = useState('hello');
    function f1(number) {
        console.log('f1 '+ number);
    }

    function f2(number) {
        console.log('mouseenter '+ number);
    }

    function showInput(event) {
        console.log('input');
        console.log(event.target.value);
        console.log(textInput.current.value);
        // console.log(this.value);
        textOutput.current.innerHTML = textInput.current.value;
        setOutput(textInput.current.value);
    }
    return (
        <div className="sidebar">
            
            <section>
                <h1>HAPPENING</h1>
                <h2>Button</h2>
                <button onClick={()=>f1(1)}>Push</button>
                <h2>Double click + mousemove</h2>
                <div className="cyanbox" onDoubleClick={f1} onMouseEnter={() => f2(2) } style={{background: cd}}></div>
                <h3>Input</h3>
                <input type="text" onInput={showInput} ref={textInput} defaultValue='lol' />
                
                <p ref={textOutput}></p>
                <p style={{ fontStyle: 'italic', background:'cadetblue' }}>{output}</p>
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