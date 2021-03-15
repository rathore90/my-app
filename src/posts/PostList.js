import React, { Component } from 'react'
import PostData from '../data/audit.json'
import '../App.css'
import PostDetail from './PostDetail'

class PostList extends Component {
    render(){    
    return (
        <div className="App">
            <h1>Imagine Everything</h1>
            {PostData.map((postDetails, index)=>{
                return <PostDetail post={postDetails} key={'psot-list-key ${index}'}/>
            })}
        </div>
        )
    }
}

export default PostList;
