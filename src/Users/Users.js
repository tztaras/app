
// import {useRouteMatch} from 'react-router-dom';

function Users() {
    // let match = useRouteMatch();
    return (
        <>
            <h1>Users</h1>
            <ul>
                <li><a href="/users/ivanovskyi">Ivanovskyi</a></li> 

                {/* <li><a href={`${match.url}/ivanovskyi`} >Ivanovskyi</a></li> */}

                <li><a href="/users/petrovskyi">Petrovskyi</a></li>
                <li><a href="/users/dmytrovskyi">Dmytrovskyi</a></li>
            </ul>
            
        </>
    )
}

export default Users;