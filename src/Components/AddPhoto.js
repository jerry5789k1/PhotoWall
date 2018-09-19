import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const longitude = Number(event.target.elements.longitude.value)||121
        const latitude = Number(event.target.elements.latitude.value)||23.5
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
            longitude: longitude,
            latitude: latitude
        }
        if (description && imageLink){
            this.props.startAddingPost(post)
            this.props.onHistory.push('/')
            
        }

    }

    render() {
        return (
    <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}> 
               <input type ="text" placeholder="Link" name="link"/>
               <input type ="text" placeholder="Desciption" name="description"/>
               <input type ="text" placeholder="longitude" name="longitude"/>
               <input type ="text" placeholder="latitude" name="latitude"/>
               <button> Post </button>
          </form>
        </div>
    </div>
    )
    }
}



export default AddPhoto