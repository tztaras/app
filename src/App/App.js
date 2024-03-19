import Header from '../Header/Header';
import Users from '../Users/Users';
import UsersID from '../Users/UsersID';
import About from '../About/About';
// import About from '../About/About';
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
            {/* <Main/> */}
            <Router>
                  
                    <Routes>
                        <Route exact path="/" element= {<Main/>} > </Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route exact path="/users" element={<Users/>}></Route>
                        <Route  path="/users/:userName" element={<UsersID/>}></Route>
                        <Route path="*" element={<Error/>}></Route>
                    
                        
                    
                    </Routes>

                    <Main/>
                    <Sidebar/>
                    <Footer/>

                </Router>
            
                
           
            
        </div>
    )
}

export default App;