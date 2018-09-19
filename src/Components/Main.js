import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Single from './single'
import SearchBar from './Search';
import FilterWall from './FilterWall'
var FiltedPosts = [];
class Main extends Component {
constructor(props){
    super();
    this.state = {
        Loading : true,
        Keyword:""
    };
    this.getKeyword = this.getKeyword.bind(this)
}


filterThePost(posts,keyword){
    posts.forEach((post)=>{
        if(post.description.match(keyword)){
            FiltedPosts.push(post)
        }
    })
    
    
}
    
    getKeyword(keyword){
        this.setState({
            Keyword : keyword
        })
    }
    
    componentDidMount(){
        this.props.startLoadingPost().then(()=>{
            this.setState( {
                Loading : false
            })
        })
        this.props.startLoadingcomments()
    }
    

    render() {
        console.log(FiltedPosts)
        
        return ( 
        <div>
            <h1>
             <Link to="/"> PhotoWall</Link> 
            </h1>
           
            <Route exact path = "/" render={() => (
                 <div>
                         <SearchBar {...this.props} keyword={this.state.Keyword} history = {this.props.history} ongetKeyword = {this.getKeyword} ongetFiltedpost = {this.filterThePost}/>
                        <PhotoWall {...this.props}/>
                 </div>

            )}/> 

            <Route path= "/AddPhoto" render = {({history}) => (
                 <AddPhoto {...this.props} onHistory ={history}/>
                    
            )}/>
            <Route path = "/single/:id" render = {(params)=> (
                    <Single Loading = {this.state.Loading} {...this.props} {...params} />
                )}/>
             <Route path = "/FilterWall" render = {({history})=> (
                    <FilterWall {...this.props} FiltedPosts = {FiltedPosts} onHistory = {history}/> 
                )}/>


         </div>
        )
    }
    

}

export default Main