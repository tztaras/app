
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Users.css';
import UsersID from './UsersID/UsersID';
// import Comment from './UsersID/Comment';

function Users() {
    let url = useLocation();
    console.log(url);
    return (
        <div className='users'>
            <div className="cats_main">
                <img src="./img/cats-main.jpg" alt="cats" />
            </div>
            <section>
                
                <h1>Users</h1>
                <ul>
                    {/* <li><a href="/users/ivanovskyi">Ivanovskyi</a></li>  */}
                    {/* <li><a href="/users/petrovskyi">Petrovskyi</a></li>
                    <li><a href="/users/dmytrovskyi">Dmytrovskyi</a></li> */}

                    {/* SPA */}
                   
                    <li><NavLink to={`${url.pathname}/ivanovskyi`} >Ivanovskyi</NavLink></li>
                    <li><NavLink to={`${url.pathname}/petrovskyi`} >Petrovskyi</NavLink></li>
                    <li><NavLink to={`${url.pathname}/dmytrovskyi`} >Dmytrovskyi</NavLink></li>
        
                </ul>
                <UsersID/>
            </section>
        </div>
    )
}

export default Users;