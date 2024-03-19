import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header-site-name'>
                <div className="header-content">
                    <h1>JAVASCRIPTUS REACTUS</h1>
                    <h2>Початок роботи</h2>
                </div>
                <div className="header-img">
                    <img src="./img/rictus-erectus.png" alt="rictus-erectus" height='150px' />
            </div>
            {/* <nav>
                <ul>
                    <li><a href='/main'>Main</a></li>
                    <li><a href='/users'>Users</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>

                
            </nav> */}


                {/* SPA */}
                {/* SPA */}
                {/* SPA */}

               <nav>
                <ul>
                    <li><Link to='/main'>Main</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>

                
            </nav>

            
        </div>
    )
}

export default Header;