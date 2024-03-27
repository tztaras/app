import '../Main/Main.css';
import '../Comp/Comp.css';
import React from 'react';  
import { useState } from 'react';


function States() {
    const [count, setCount] = useState(0);
    const [comment, setComment] = useState([]);

    let textComment = React.createRef();




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
    

    return (

        
        <div className='states'>
            <section>
                <h1>States</h1>
                <div>
                    <button onClick={handler}>This button changes state</button>
                </div>
                <div>{count % 2 === 0 ? 'even' : 'odd' }</div>
                <div>{count}</div>
                
                <div><textarea name="" id="" cols="40" rows="3" ref={textComment}></textarea></div>
                
                <div><button onClick={addComment}>Залишити опінію</button></div>

                <ul>
                    {comment.map(
                            (item, index) =>
                                <li key={index.toString()}><i>{'"' + item + '"'}</i></li>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default States;