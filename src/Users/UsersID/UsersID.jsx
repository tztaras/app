
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Usersid.module.css";
import users from '../../data/users.json';
import Comment from "./Comment";
import React, {useRef, useState} from "react";



const UsersID = (props)=> {
    let { userName } = useParams();
    const [likeOmeter, setLikes] = useState(0);
    const likeCount = useRef();

    function likeFu() {
        const count = likeOmeter+1;
        setLikes(count);
        likeCount.current.innerHTML = count;

    }

    let commentData = [
        {
            id: 1,
            message: 'Lorem?',
        },
        {
            id: 2,
            message: 'Lorem? Ipsum...',
        },
        {
            id: 3,
            message: 'Lorem? Ipsum... Dolor!',
        }
    ]

    return (
        <div className="aboutUsers">
            {/* <NavLink to={"/users/" + props.id}>{props.name}</NavLink> */}
            <section>
                

                {/* <NavLink to={"/users/" + props.id}>{props.name}</NavLink> */}

                <Link to="/users"><h2>Back</h2></Link>  
                <h1>User: {userName}</h1>
                <div className={css.userWrapper}>
                    <div className={css.userInfo}> 
                        <div>place for avatar</div>
                        <div>
                            <ul>Mottos:
                                    {users.map(m => <li key={m.id}><i>{m.motto}</i>
                                </li>)}
                            </ul>
                            <i>{users[4].motto}</i>
                            
                        </div>
                        <span>KUDOS</span>
                        <button className={css.like} onClick={likeFu}>+&#128077;+ </button><br />
                        <span> kudos given: </span><span ref={likeCount} className={css.likeOmeter}></span>
                        <br /><hr/>
                        <span>Comments:</span>
                        <Comment message='Lorem?'/>
                        <Comment message='Ipsum...'/>
                        <Comment message='Dolor!'/>
                        <Comment id={commentData[2].id} message={commentData[2].message} />


                        <img src="" alt="" />
                    </div>
                    <div className={css.sendMessage}>
                        <h2>send messsage</h2>
                        <label htmlFor="message">Send your message here:</label>
                        <textarea className={css.messageArea} name="name" id="message"></textarea>
                        <button>SEND</button>
                    </div>
                </div>
            </section>
            
        </div>
    )
}



export default UsersID;