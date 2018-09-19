import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'
import Container from '../googlemap/googlemap'
class Single extends Component {
       

    render(){
        const {match,posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post)=> post.id===id)
        const comments = this.props.comments[id] || []
        if (this.props.Loading === true){
            return <div className = "loader"> ...Loading </div>
        }else{
            return <div className = "singlecontainer">
                <div className = "single-photo">
                    {post && <Photo post = {post} {...this.props} index ={id}/>}
                    <Comments startAddingcomment = {this.props.startAddingcomment} comments = {comments} id={id}/>
                </div>
                <div>
                    <Container lat = {post.latitude} lng = {post.longitude}/>
                </div>
            </div>

        }
     
     
  }
}

export default Single
