import Header from '../Header/Header';
import Users from '../Users/Users';
import About from '../About/About';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
    return (
        <div className='container'>
            <Header />
            <Router>
                <Switch>
                    <Route path='/' component={Main}></Route>
                </Switch>
            </Router>
            <Main/>
            <Sidebar/>
            <Footer/>
        </div>
    )
}

export default App;