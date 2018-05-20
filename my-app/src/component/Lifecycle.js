import React, { Component } from 'react';
import $ from 'jquery';
class Lifecycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Lifecycle"
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    
    }
    handleChangeTitle(){
        this.setState({
            title: "LifecycleComponent - handleChangeTitle"
        })
    }
    render(){
        console.log("render");
        return(
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.title}</h3>
                </div>
                <div className="panel-body">
                    <button onClick={this.handleChangeTitle}  className="btn btn-success" type="button">Change Title</button>
                    
                </div>
            </div>
        );
    }
}
export default Lifecycle;