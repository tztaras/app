import Header from '../Header/Header';
import Users from '../Users/Users';
import UsersID from '../Users/UsersID';
import About from '../About/About';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import Comp1 from '../Comp/Comp1';
import Comp2 from '../Comp/Comp2';
import './App.css';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
         
            <div className='container'>
            <Comp1 />
            <Comp2/>
            
            <Router>
                    
                    <Header />
                
                    <Sidebar/>
                    <Main />
                                <Routes>
                                    <Route exact path="/" element= {<Main/>} />
                                    <Route path="/about" element={<About/>}/>
                                    <Route exact path="/users" element={<Users/>}/>
                                    <Route  path="/users/:userName" element={<UsersID/>}/>
                                    <Route path="*" element={<Error/>}/>
                                
                                    
                                
                                </Routes>
                    
                    <Footer/>
                        
                </Router>

                    
                
                    
            
                
            
            </div>
    )
}

export default App;