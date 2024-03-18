import Header from '../Header/Header';
import Users from '../Users/Users';
import UsersID from '../Users/UsersID';
import About from '../About/About';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import './App.css';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className='container'>
            <Header />
            
            <Router>
                {/* <nav>
                    <li><Link to='/'>Main</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                   
                </nav> */}
                <Routes>
                    <Route exact path="/" element= {<Main/>} > </Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route exact path="/users" element={<Users/>}></Route>
                    <Route  path="/users/:userName" element={<UsersID/>}></Route>
                    <Route path="*" element={<Error/>}></Route>
                
                    
                
                </Routes>

                <Sidebar/>
                <Footer/>

            </Router>
            
            
        </div>
    )
}

export default App;