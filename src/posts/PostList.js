import React, { Component } from 'react';
import PostData from '../data/audit.json'

class PostList extends Component {
    render(){    
    return (
        <div className="App">
            <h1>Hello There</h1>
            {PostData.map((postDetails, index)=>{
                return <h1>{postDetails.email}</h1>
            })}
        </div>
    )
    }
}

export default PostList;
