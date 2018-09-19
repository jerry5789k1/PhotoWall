import React,{Component} from 'react';
import Photo from './Photo'

class FilterWall extends Component{
    render(){
        const FiltedPosts = this.props.FiltedPosts || []
        console.log(this.props)
        return(<div className="photoGrid" >
        {FiltedPosts
          .sort(function(x,y) {
              return  y.id - x.id
          }).map((post, index) => <Photo key={index} post={post} {...this.props} index={index}/>)}
        </div>
            
        )
    }
}


export default FilterWall