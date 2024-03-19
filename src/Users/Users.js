
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Users() {
    let url = useLocation();
    console.log(url);
    return (
        <>
            <h1>Users</h1>
            <ul>
                {/* <li><a href="/users/ivanovskyi">Ivanovskyi</a></li>  */}

                

                {/* <li><a href="/users/petrovskyi">Petrovskyi</a></li>
                <li><a href="/users/dmytrovskyi">Dmytrovskyi</a></li> */}


                 {/* SPA */}
                {/* SPA */}
                {/* SPA */}

                <li><Link to={`${url.pathname}/ivanovskyi`} >Ivanovskyi</Link></li>
                <li><Link to={`${url.pathname}/petrovskyi`} >Petrovskyi</Link></li>
                <li><Link to={`${url.pathname}/dmytrovskyi`} >Dmytrovskyi</Link></li>
            </ul>
            
        </>
    )
}

export default Users;