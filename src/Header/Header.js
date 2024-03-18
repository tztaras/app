import './Header.css';

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
            <nav>
                <li><a href='/'>Main</a></li>
                <li><a href='/'>Users</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contacts</a></li>
            </nav>
            
        </div>
    )
}

export default Header;