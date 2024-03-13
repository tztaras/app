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
                    <a>{item.href}</a>

                </section>)}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem alias, eos magni delectus quibusdam iusto reprehenderit repudiandae pariatur nobis. Voluptatum suscipit cumque, molestiae nulla, ab natus deleniti quo beatae eos neque, voluptas velit modi aliquam. Et beatae ipsum quis nobis sunt. Nulla perferendis modi odio laudantium ipsam officiis assumenda enim consequuntur saepe praesentium. Voluptate nemo neque dolore repellendus quaerat culpa libero quas dolores ut, voluptatem consectetur, asperiores corporis recusandae, eveniet explicabo delectus minus amet expedita debitis sed unde. Ipsa ea iure possimus. Nam alias inventore quaerat consectetur quibusdam vitae sit animi magnam velit rem eligendi, quas modi quod. Numquam, delectus?
            </p>
            
            
        </div> 
    )
}

export default Main;