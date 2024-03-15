import './Sidebar.css';
import links from '../data/articles.json';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <nav>
                <ul>
                    {links.map(li2 =>
                        <li key={li2}>
                            <a href={li2.hlink}>{li2.title}</a>
                        </li>)}
                </ul>
            </nav>
            
            
        </div> 
    )
}

export default Sidebar;