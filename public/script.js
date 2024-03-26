console.log('script.js works!');
const comment = [];
document.querySelector('.statebutton').onclick = () => {
    console.log('()=> works');
    let value = document.querySelector('input').value;
    console.log(value);
    let res = document.querySelector('.res1');
    res.innerHTML = value;

    comment.push(value);
    draw();
};

function draw() {
    let out = '';
    for (let i = 0; i < comment.length; i++){
        out += `<li>${comment[i]}</li>`;
    }
    document.querySelector('ul').innerHTML = out;
}