import './Main.css';
import articles from '../data/articles.json';
console.log(articles);
function Main() {
    return (
        <div className="main">
            {/* {articles.map(item => <h2>{item.title}</h2>)} */}
            {articles.map(item =>
                <section>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <a href={item.hlink}>{item.title}</a>

                </section>)}
            
            
            
        </div> 
    )
}

export default Main;