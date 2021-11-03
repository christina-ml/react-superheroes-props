import { Component } from "react";

class IronMan extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="heroCard">
                <h2 id="heroName">{ this.props.ironMan.name }</h2>
                <p id="description">{ this.props.ironMan.description }</p>
                <img src={ this.props.ironMan.thumbnail } alt="Iron-Man!"></img>
            </div>
        )
    }
}

export default IronMan;
