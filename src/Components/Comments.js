import React, {Component} from 'react'

class Comments extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        
        event.preventDefault()
        const comment = event.target.elements.comment.value
        //console.log(comment)
        this.props.startAddingcomment(comment,this.props.id)
        event.target.elements.comment.value =''
    }
    render() {

        console.log(this.props.comments)
        return(
        
            <div className="comment">
                
                 {
                    this.props.comments.map((comment, index)=>{
                        return(
                                <p key={index}>{comment}</p>
                            )   
                    })
                } 
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment" required/>
                    <input type = "submit" hidden/>
                </form>
            
            
            </div>

        )
    }

}

export default Comments