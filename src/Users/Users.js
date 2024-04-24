
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Users.css';

function Users() {
    let url = useLocation();
    console.log(url);
    return (
        <div className='users'>
            <div className="cat-main">
                <img src="./img/cat-main.jpg" alt="grey cat" />
            </div>
            <section>
                
                <h1>Users</h1>
                <ul>
                    {/* <li><a href="/users/ivanovskyi">Ivanovskyi</a></li>  */}

                    

                    {/* <li><a href="/users/petrovskyi">Petrovskyi</a></li>
                    <li><a href="/users/dmytrovskyi">Dmytrovskyi</a></li> */}


                    {/* SPA */}
                    {/* SPA */}
                    {/* SPA */}

                    <li><NavLink to={`${url.pathname}/ivanovskyi`} >Ivanovskyi</NavLink></li>
                    <li><NavLink to={`${url.pathname}/petrovskyi`} >Petrovskyi</NavLink></li>
                    <li><NavLink to={`${url.pathname}/dmytrovskyi`} >Dmytrovskyi</NavLink></li>
                </ul>
            </section>
        </div>
    )
}

export default Users;