
import css from "./Comment.module.css";
import React from "react";
const Comment = (props) => {
    console.log(props.message);
    
    return (
        <div className={css.comment}>
            
            
          
            <p className={css.text} style={{ fontStyle: 'italic' }} >{props.message} </p>
            
        </div>
    )
}

export default Comment;