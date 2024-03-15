import './Main.css';
import articles from '../data/articles.json';
console.log(articles);
function Main() {

    let q = 3;
    const m = [1, 2, 3, 4, 5];
    let c = { 'background': 'cadetblue' };
    let nc = 'aliceblue';

    return (
        <div className="main">

            <section>
                <h3>Вивід змінної </h3>
                <div>{q + q*q}</div>
                <div>{'{}'}</div>

                <h3>Вивід массиву </h3>
                <div>{m}</div>
                <div>{m.join('^')}</div>

                <h3>Методи массивів </h3>
                <div>{m.map(item=>item)}</div>
                <div>{m.map(item => item + '^')}</div>
                
                <h3>Методи массивів -  створення елементів </h3>
                <div>{m.map(item => <b>{item + ' '}</b>)}</div>
                
                <h3>Стилі inline</h3>
                <p style={c}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum possimus, cupiditate nemo sunt et sed saepe aliquid quasi minima dolorem necessitatibus quos velit esse modi nobis vitae architecto maiores.</p>
                <p style={{ color: nc, background:'cadetblue' }}  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum possimus, cupiditate nemo sunt et sed saepe aliquid quasi minima dolorem necessitatibus quos velit esse modi nobis vitae architecto maiores.</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae est earum voluptatum voluptates nulla sequi facilis, ipsam explicabo obcaecati natus ratione fuga voluptatibus repellat incidunt, iure libero, cumque mollitia. Magni.
                </p>



            </section>
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