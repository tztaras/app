import './Sidebar.css';
import links from '../data/articles.json';

function Sidebar() {
    let a = 33;
    function f1() {
        console.log('f1 '+ a);
    }
    return (
        <div className="sidebar">
            
            <section>
                <h1>HAPPENING</h1>
                <h2>Button</h2>
                <button onClick={f1}>Push</button>
                <h2>Double click + mousemove</h2>
                <div className="cyanbox"></div>
            </section>
            <nav>
                {/* <ul>
                    {links.map(li2 =>
                        <li key={li2}>
                            <a href={li2.hlink}>{li2.title}</a>
                        </li>)}
                </ul> */}
            </nav>
            
            
        </div> 
    )
}

export default Sidebar;