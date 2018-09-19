import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class SearchBar extends Component {
    constructor(){
        super()
        this.handlesubmit = this.handlesubmit.bind(this)
    }
    handlesubmit(event){

        event.preventDefault();
        const keyword = event.target.elements.keyword.value
        const posts = this.props.posts
        this.props.ongetKeyword(keyword)
        this.props.ongetFiltedpost(posts, keyword)
        console.log(this.props)
        this.props.history.push('./FilterWall')    
    }
    
    render(){
        
        
        
        return(
            <div className="SearchBar">
                <form onSubmit={this.handlesubmit}>
                <input name ="keyword"className="search" type="text" placeholder="Search something..."></input>
                <button>Search</button>
                </form>
            </div>
        )
    }
} 

export default SearchBar