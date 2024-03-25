import './Sidebar.css';
import links from '../data/articles.json';
import dogs from '../data/dogs.json';
import React from 'react';
import { useState } from 'react';

function Sidebar() {
    console.log(dogs);
    
    // console.log(Number.MAX_SAFE_INTEGER);
    
    let cd = 'cadetblue';
    let textInput = React.createRef();
    let textOutput = React.createRef();
    let task4 = React.createRef();
    let task4Out = React.createRef();
    const [output, setOutput] = useState('hello');
    
    function f1(number) {
        console.log('f1 '+ number);
    }

    function f2(number) {
        console.log('mouseenter '+ number);
    }

    function showInput(event) {
        // console.log('input');
        // console.log(event.target.value);
        // console.log(textInput.current.value);
        // console.log(this.value);
        textOutput.current.innerHTML = textInput.current.value;
        setOutput(textInput.current.value);
        setOutput(console.log(textInput.current.value));
        // let sd = textInput.current.value;
        // console.log(sd);
    }

    function t4() {
        let sd = task4.current.value;
        task4Out.current.innerHTML = sd;
        console.log(sd);
    }

    // function task3{
    //     text
    // }
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
                <input type="text" onInput={t4} ref={task4} defaultValue='lol2' />
                
                <p ref={textOutput}></p>
                <p style={{ fontStyle: 'italic', background: 'cadetblue' }}>{output}</p>
                <p ref={task4Out}></p>
            </section>

            <nav>
                <ul>
                    {links.map(item =>
                        <li key={item.id}>
                            <a href={item.hlink}>{item.title}</a>
                        </li>)}
                    {dogs.map(item =>
                        <li key={item.id}>
                            <a href={item.picture}>{item.title}</a>
                            <p>{item.description}</p>
                        </li>)}
                </ul>
            </nav>
            
            
        </div> 
    )
}

export default Sidebar;