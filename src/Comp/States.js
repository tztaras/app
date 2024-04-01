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
                
                <div ><textarea name="" id="" ref={textComment} style={{ width: '80%' }} rows={3} ></textarea></div>
                
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim architecto doloremque libero tempora officiis quas dolorem minus temporibus placeat asperiores ratione exercitationem illo, ullam nihil ea beatae praesentium voluptas? Animi necessitatibus cupiditate ullam molestias vero obcaecati blanditiis. Necessitatibus doloremque natus non voluptatum nisi aliquam beatae nesciunt officiis pariatur hic ipsam quos placeat repudiandae, fugit dolor aperiam sit, provident nihil eligendi autem dolorem! Nisi, unde dignissimos incidunt iure expedita sapiente? Atque sint reiciendis alias, molestias tempora, veritatis asperiores inventore corrupti sit beatae aut deleniti explicabo veniam laboriosam aperiam saepe hic voluptate! Sunt nisi a molestias ipsa reprehenderit fugit facilis. Perspiciatis vel debitis, consectetur officia sequi a iure culpa dolore dicta porro omnis voluptates iusto nostrum nulla delectus illum voluptas itaque sed quidem at voluptatem. Accusamus ipsum error soluta. Laudantium est dolores voluptates voluptatum. Tempora ratione deleniti ipsa cupiditate atque vero libero doloribus quos asperiores unde obcaecati, soluta velit non quidem repellat porro voluptate error impedit culpa in sint dignissimos. Magni eos quibusdam aspernatur culpa error. Praesentium dolore atque nisi quis, animi aut libero, odit nulla quas laudantium dolores ducimus repellat sapiente ut consequuntur enim placeat modi labore cum asperiores reiciendis tempora eveniet ipsa beatae? Odit illo excepturi tempore ullam, illum nam?
                </p>
            </section>
        </div>
    );
}

export default States;