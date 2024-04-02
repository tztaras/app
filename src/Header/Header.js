import './Header.css';
import { NavLink } from 'react-router-dom';


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
                        <li><NavLink to='/main'>Main</NavLink></li>
                        <li><NavLink to='/users'>Users</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/states'>States</NavLink></li>
                        <li><NavLink to='/lifecycles'>Lifecycles</NavLink></li>
                    </ul>
                </nav>

            
        </div>
    )
}

export default Header;