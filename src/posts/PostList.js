import React, { Component } from 'react'
import PostData from '../data/audit.json'
import '../App.css'

class PostList extends Component {
    render(){    
    return (
        <div className="App">
            <h1>Imagine Everything</h1>
            {PostData.map((postDetails, index)=>{
                return <div className="card-holder">
                            <h1>{postDetails.email}</h1>
                            <p>{postDetails.created}</p>
                        </div>
            })}
        </div>
    )
    }
}

export default PostList;
