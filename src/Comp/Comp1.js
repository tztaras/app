

import React from "react";
class Comp1 extends React.Component{


    constructor() {
        super();
        this.state = {
            count: 0,
            comment:[]
        }
        this.textComment = React.createRef();
}



    handler = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount
        });
    }

    addComment=()=> {
        let comment = this.textComment.current.value;
        let listOfComments = this.state.comment;
        listOfComments.push(comment);
        this.setState({
            comment : listOfComments
        });
        this.textComment.current.value = '';
    }

    render() {
        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handler}>This button changes state</button>
                </div>
                <div>{this.state.count % 2 === 0 ? 'even' : 'odd' }</div>
                <div>{this.state.count}</div>
                <div><textarea name="" id="" cols="40" rows="3" ref={this.textComment}></textarea></div>
                <div><button onClick={this.addComment}>Залишити опінію</button></div>
                <ul>{this.state.comment.map((item,index)=> <li key={index.toString()}><i>{'"' + item + '"'}</i></li>)}</ul>
            </>
        );
    }
}

export default Comp1;