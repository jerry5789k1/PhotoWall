import React, {Component} from 'react'
import {withGoogleMap, GoogleMap,Marker} from 'react-google-maps';





class Container extends Component{
  
    
     render(){
            const MarkClick = (event) => {
            

                
            } 
            
            let MyMap = withGoogleMap(props => (
            <GoogleMap  defaultCenter = { { lat: this.props.lat, lng: this.props.lng} }
            defaultZoom = { 7 }>
            <Marker  position={{lat: this.props.lat, lng: this.props.lng}} onClick={MarkClick()}/>
            </GoogleMap>
            ));
            console.log(Marker)
        
        return(
            <div className = "mapcontainer">
                <MyMap containerElement={ <div style={{ height: `500px`, width: '100%',margin: '0px' }} /> }mapElement={ <div style={{ height: `100%` }} /> }/>
            </div>
        )


    }


}



export default Container