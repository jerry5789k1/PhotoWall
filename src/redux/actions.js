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
            dispatch(loadPosts(posts))
        })



    } 
}
export function startRemovingPost(index, id){
       const updates = {
         [`posts/${id}`]: null,
         [`comments/${id}`]: null,
         
        }
        return (dispatch) => {
            return database.ref().update(updates).then(() => {
                dispatch(removePost(index))
                }).catch((error) => {
                        console.log(error)
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
export function loadComments(comments){
    return {
        type:'LOAD_COMMENTS',
        comments
    }
}
export function startLoadingcomments(){
    return (dispatch)=>{
        database.ref('comments').once('value').then((snapshot)=>{
            let comments ={}
            snapshot.forEach((childSnapshot)=>{
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
          dispatch(loadComments(comments))
        })
    }
}
export function startAddingcomment(comment, postId){
    return (dispatch) =>{
            return database.ref('comments/'+ postId).push(comment).then(()=>{
                dispatch(addComment(comment, postId))
            })
    }
}