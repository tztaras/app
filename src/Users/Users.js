
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import users from '../data/users.json';
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
                   
                    <li><NavLink to={`${url.pathname}/ivanovskyi`} name='Ivanovskyi' id='1'>Ivanovskyi </NavLink></li>
                    <li><NavLink to={`${url.pathname}/petrovskyi`} >Petrovskyi</NavLink></li>
                    <li><NavLink to={`${url.pathname}/dmytrovskyi`} >Dmytrovskyi</NavLink></li>
                    {/* <li><UsersID name='Ivanovskyi' id='1'/></li>
                    <li><UsersID name='Petrovskyi' id='2'/></li>
                    <li><UsersID name='Dmytrovskyi' id='3'/></li> */}
                   
                    {/* {users.map(u => <li key={u}>{u.name}</li>)} */}
        
                </ul>
                <ul>
                    {users.map(u => (<li key={u}>
                        <NavLink to={`${url.pathname}/${u.name}`}>{u.name}</NavLink>
                        </li>
                    ))}
                </ul>
                
                {/* <UsersID/> */}
            </section>
        </div>
    )
}

export default Users;