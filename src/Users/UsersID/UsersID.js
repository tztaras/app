
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Usersid.module.css";
import Comment from "./Comment";
import React from "react";



const UsersID = ()=> {
    let { userName } = useParams();
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