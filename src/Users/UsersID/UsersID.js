
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Usersid.module.css";
import Comment from "./Comment";
import React, {useRef, useState} from "react";



const UsersID = ()=> {
    let { userName } = useParams();
    const [likeOmeter, setLikeOmeter] = useState(0);
    const likeCount = useRef();

    function likeFu() {
        const count = likeOmeter+1;
        setLikeOmeter(count);
        likeCount.current.innerHTML = count;

    }
    return (
        <div className="aboutUsers">
            <section>
                {/* <a href="/users">Back</a>  
                <h1>User: {userName}</h1> */}


                {/* SPA */}
                    {/* SPA */}
                    {/* SPA */}
                <Link to="/users"><h2>Back</h2></Link>  
                <h1>User: {userName}</h1>
                <div className={css.userInfo}> 
                    <div>place for avatar</div>
                    <div>place for motto</div>
                    <span>KUDOS</span>
                    <button className={css.like} onClick={likeFu}>+&#128077;+ </button><br />
                    <span> kudos given: </span><span ref={likeCount} className={css.likeOmeter}></span>
                    
                    {/* <span ref={likeCount}></span> */}
                    <br />
                    <span>Comments:</span>
                    <Comment message='Lorem?'/>
                    <Comment message='Ipsum...'/>
                    <Comment message='Dolor!'/>


                    <img src="" alt="" />
                </div>
            </section>
        </div>
    )
}

export default UsersID;