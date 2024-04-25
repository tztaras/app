import Header from '../Header/Header';
import Users from '../Users/Users';
import UsersID from '../Users/UsersID';
import About from '../About/About';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
// import Comp1 from '../Comp/Comp1';
import States from '../Comp/States';
import Lifecycle from '../Lifecycles/Lifecycle';
import Test2 from '../ComponentTest/ComponentTest';
import './App.css';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    // const App = ()=>{
    
    return (
        <div className='container'>
            <Router>
                <Header />
                {/* <Comp1/> */}
                <Sidebar />
                
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route exact path="/users" element={<Users />} />
                    <Route path="/users/:userName" element={<UsersID />} />
                    <Route path="/states" element={<States />} />
                    <Route path="/lifecycles" element={<Lifecycle arg={777} anthrarg={'qwer'} shtnofprops={[91, 23, 234, 4]} />} />
                    <Route path="/component-test" element={<Test2 arg={88} />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}
export default App;