import Header from '../Header/Header';
import Users from '../Users/Users';
import UsersID from '../Users/UsersID';
import About from '../About/About';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import './App.css';


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
                <Switch>
                    <Route exact path='/' component={Main}></Route>
                    <Route path='../about' component={About}></Route>
                    <Route exact path='../users' component={Users}></Route>
                    <Route exact path='../users/:userName' component={UsersID}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </Router>
            <Main/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default App;