import './Main.css';
import articles from '../data/articles.json';
console.log(articles);

function Main() {

    let q = 3;
    const m = [1, 2, 3, 4, 5];
    let c = { 'background': 'cadetblue' };
    let ab = 'aliceblue';
    const f = { 'one': 'one-one', 'two': 'two-two' };
    const f1 = Object.keys(f);
    console.log(f1);

    return (
        <div className="main">
            <div className="brick-main">
            <img src="./img/brickwall.png" alt="rocks" />
            </div>

            <section>
                <h3>Вивід змінної </h3>
                <div>{q + q*q}</div>
                <div>{'{}'}</div>

                <h3>Вивід массиву </h3>
                <div>{m}</div>
                {/* <div>{m.join('^')}</div> */}

                <h3>Методи массивів </h3>
                {/* <div>{m.map(item=>item)}</div>
                <div>{m.map(item => item + '^')}</div> */}
                
                <h3>Методи массивів -  створення елементів </h3>
                <div>{m.map(item => <b key={item}><i>{item + '[:////:]'}</i></b>)}</div>

                <p>{m.map(item => <span key={item}>{item} </span>)}</p>


                
                <h3>Стилі inline</h3>
                <p style={c}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p style={{ color: ab, background: 'cadetblue', textShadow: '0 0 3px whitesmoke', fontSize: '18px', padding:'5px 8px' }}  >Lorem ipsum dolor sit amet consectetur</p>
                
                
                {/* <div>{Object.keys(f).map(item => ' ' + item + ' ' + f[item]) + ' '}</div> */}
                
                {/* <ul>
                    {f1.map(item => <li key={item}>{item + ': ' + f[item]};</li>)}
                </ul> */}

               
            </section>

                {/* {articles.map(item => <h2 key={item}>{item.title}</h2>)} */}
            {articles.map(cont =>
                <section key={cont.id}>
                    
                    <h3>{cont.title}</h3>
                    <p>{cont.body}</p>
                    <a data='qwerty' href={cont.hlink}>{cont.title}</a>

                </section>)}
        </div> 
    )
}

export default Main;