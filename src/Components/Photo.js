import React from 'react'
import PropTypes from 'prop-types'

let Photo = (props) => {
  const post = props.post
  return <figure className = "figure">
            <img className= "photo" src = {post.imageLink} alt ={post.description}/>
            <figurecaption><p>{post.description}</p></figurecaption>
            <div className= "button-container">
            <button className = "button" onClick = {() => {
              props.onRemovePhoto(post)
            }}> Remove </button>
            </div>
         </figure>


}

Photo.PropTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired



}

export default Photo
