import React from "react";

export default class Form extends React.Component{
    state = {
        title: "",
        text: "",
        library: ""
    }

    handleChange = (e) => {
        if(e.target.type === "text"){
            this.setState({
                title: e.target.value
            })
        }else if(e.target.type === "textarea"){
            this.setState({
                text: e.target.value
            })
        }else if(e.target.type === "select-one"){
            this.setState({
                text: e.target.value
            })
        }else {
            console.log("Nothing")
        }
    }

    render(){
        const {title, text, library} = this.state;
        return(
            <div>
                <form>
                    <input type="text" placeholder="Enter Title" value={title} onChange={this.handleChange}/><br/><br/>
                    <textarea name="text" placeholder="Enter Message" value={text} onChange={this.handleChange}></textarea><br/><br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Node">Node</option>
                    </select>
                </form>
            </div>
        )
    }
}