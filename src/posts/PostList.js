import React, { Component } from 'react'
import PostData from '../data/audit.json'
import '../App.css'
import PostDetail from './PostDetail'

class PostList extends Component {
    constructor(props){
        super(props)
        this.handleDataCallback = this.handleDataCallback.bind(this)
    }
    handleDataCallback(txtMsg){
        alert(txtMsg)
        console.log(this)
    }
    render(){    
    return (
        <div className="App">
            <h1>Imagine Everything</h1>
            {PostData.map((postDetails, index)=>{
                return <PostDetail 
                    // eslint-disable-next-line
                    post={postDetails} key={'psot-list-key ${index}'} 
                    dataCallback={this.handleDataCallback}/>
            })}
        </div>
        )
    }
}

export default PostList;
