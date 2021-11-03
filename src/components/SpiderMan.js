import { Component } from "react";

class SpiderMan extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="heroCard">
                <h2 id="heroName">{ this.props.spiderMan.name }</h2>
                <p id="description">{ this.props.spiderMan.description }</p>
                <img src={ this.props.spiderMan.thumbnail } alt="Spidey!"></img>
            </div>
        )
    }
}

export default SpiderMan;
