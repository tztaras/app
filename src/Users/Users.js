
import {useLocation} from 'react-router-dom';

function Users() {
    let url = useLocation();
    console.log(url);
    return (
        <>
            <h1>Users</h1>
            <ul>
                {/* <li><a href="/users/ivanovskyi">Ivanovskyi</a></li>  */}

                <li><a href={`${url.pathname}/ivanovskyi`} >Ivanovskyi</a></li>
                <li><a href={`${url.pathname}/petrovskyi`} >Petrovskyi</a></li>
                <li><a href={`${url.pathname}/dmytrovskyi`} >Dmytrovskyi</a></li>

                {/* <li><a href="/users/petrovskyi">Petrovskyi</a></li>
                <li><a href="/users/dmytrovskyi">Dmytrovskyi</a></li> */}
            </ul>
            
        </>
    )
}

export default Users;