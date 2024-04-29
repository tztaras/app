
import css from "./Comment.module.css";
function Comment() {
    
    return (
        <div className={css.comment}>
            
            <p className={css.text} style={{ fontStyle:'italic' }}>Lorem Comment dolor sit amet consectetur adipisicing elit. Maxime incidunt hic modi veritatis molestias ex sint tenetur asperiores rerum voluptates.</p>
            
        </div>
    )
}

export default Comment;