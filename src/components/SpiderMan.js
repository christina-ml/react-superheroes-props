import { Component } from "react";

class SpiderMan extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="heroCard">
                <h2 id="heroName">{ this.props.spiderMan.name }</h2>
            </div>
        )
    }
}

export default SpiderMan;
