import React, { Component } from 'react'
import '../App.css'

class PostDetails extends Component {
    render(){
        const {post} = this.props    
    return (
            <div className="card-holder">
                <h1>{post.email}</h1>
                <p>{post.created}</p>
            </div>
        )
    }
}

export default PostDetails;
