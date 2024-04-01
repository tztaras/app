import '../Main/Main.css';
import '../Comp/Comp.css';
import React from 'react';  
import { useState } from 'react';


function States() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);
    const [st1, setContent] = useState([]);
    const [st2, setState] = useState(0);

    let textComment = React.createRef();
    let inputContent = React.createRef();




    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);


            
    }


    let addComment = () => {
        let commentContent = textComment.current.value;
        let comments = [...comment, commentContent];
        setComment(comments);
        textComment.current.value = '';
    }

    let f4task = () => {
        console.log('task4');
        let t4content = inputContent.current.value;
        console.log(t4content);
        let t4inputs = [...st1, t4content];
        setContent(t4inputs);
        inputContent.current.value = '';

    }

    let task2 = (number) => {
        
        let currentSt2 = st2;
        currentSt2 += number;
        setState(currentSt2);
        console.log(currentSt2);
    }
    

    return (

        
        <div className='states'>
            <section>
                <h1>States</h1>
                <div>
                    <button onClick={handler}>This button changes state</button>
                </div>
                <div>{count % 2 === 0 ? 'even' : 'odd' }</div>
                <div>{count}</div>
                
                <div ><textarea name="" id=""  ref={textComment}  style={{ width: '50%' }}></textarea></div>
                
                <div><button onClick={addComment}>Залишити опінію</button></div>

                <ul>
                    {comment.map(
                            (item, index) =>
                                <li key={index.toString()}><i>{'"' + item + '"'}</i></li>
                    )}
                </ul>
            </section>
            <section>
                <hr/>
                <h2>Task 1</h2>
                <input type="text" ref={inputContent} />
                <div><button onClick={f4task}>Task1</button></div>
                <div>
                    {st1.map(
                        (item, index) => <span key={index.toString()}><b>{item}<br/></b></span>)}</div>
            </section>
            <section>
                <hr />
                <h2>Task 2</h2>
                <div className="task2" onMouseEnter={()=>task2(11)}> <h4>блок task 2</h4></div>
                <div>{st2}</div>
            </section>
            <section>
                <hr />
                <h2>Task 3</h2>
                <div><input type="text" /></div>
                <div>{'{st3}'}</div>
            </section>
        </div>
    );
}

export default States;