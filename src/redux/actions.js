import posts from "../data/posts";
import {database} from '../database/config';




export function startAddingPost(post){
    return(dispatch) => {
        return database.ref('posts').update({[post.id]:post}).then(()=>{
            dispatch(addPost(post))
        })
    }
}

export function startLoadingPost(){
    let posts = []
    return(dispatch)=>{
        return database.ref('posts').once('value').then((snapshot)=>{
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            console.log(posts)
            dispatch(loadPosts(posts))
        })



    } 
}
export function startRemovingPost(index, id){
    return(dispatch) => {
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        })
    }
}
export function removePost(index){
    return {
        type:'REMOVE_POST',
        index:index
    }
} 

export function addPost(post){
    return {
        type:'ADD_POST',
        post:post
    }
}

export function addComment(comment,postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }

}
export function loadPosts(posts){
    return {
        type:'LOAD_POSTS',
        posts
    }
}
export function startAddingcomment(comment, postId){
    return (dispatch) =>{
            return database.ref('comments/'+ postId).push(comment).then(()=>{
                addComment(comment, postId)
            })
    }
}