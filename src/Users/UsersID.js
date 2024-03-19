
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Users.css';

function UsersID() {
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
            </section>
        </div>
    )
}

export default UsersID;