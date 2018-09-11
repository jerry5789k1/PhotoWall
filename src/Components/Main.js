import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'
import { Link } from 'react-router-dom';
import Single from './single'

class Main extends Component {
    
    componentDidMount(){
        this.props.startLoadingPost()
    }
    

    render() {
        return ( 
        
        <div>
            <h1>
             <Link to="/"> PhotoWall</Link> 
            </h1>
            <Route exact path = "/" render={() => (
                 <div>
                        <PhotoWall {...this.props}/>
                 </div>

            )}/> 

            <Route path= "/AddPhoto" render = {({history}) => (
                 <AddPhoto {...this.props} onHistory ={history}/>
                    
            )}/>
            <Route path = "/single/:id" render = {(params)=> (
                    <Single {...this.props} {...params} />
                )}/>

         </div>
        )
    }

}


export default Main