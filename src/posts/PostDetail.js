import React, { Component } from 'react'
import '../App.css'

class PostDetails extends Component {
    constructor(props){
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.state = {
            showContent: false
        }
    }
    titleWasClicked(event){
        event.preventDefault()
        const {dataCallback} = this.props
        if(dataCallback !== undefined){
            dataCallback("Hello World") 
        }
    }
    toggleContent(event){
        event.preventDefault()
        this.setState({
            showContent: !this.state.showContent
        })
    }
    render(){
        const {post} = this.props
        const {showContent} = this.state    
    return (
            <div className="card-holder">
                <h1 onClick={this.titleWasClicked}>{post.email}</h1>
                {showContent === true ? <p>{post.created}</p> : ""}
                <button className="button" onClick={this.toggleContent}>Toogle to see the Content</button>
            </div>
        )
    }
}

export default PostDetails;
