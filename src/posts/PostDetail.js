import React, { Component } from 'react'
import '../App.css'

class PostDetails extends Component {
    constructor(props){
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
    }
    titleWasClicked(event){
        event.preventDefault()
        const {dataCallback} = this.props
        if(dataCallback !== undefined){
            dataCallback("Hello World") 
        }
    }
    render(){
        const {post} = this.props    
    return (
            <div className="card-holder">
                <h1 onClick={this.titleWasClicked}>{post.email}</h1>
                <p>{post.created}</p>
            </div>
        )
    }
}

export default PostDetails;
