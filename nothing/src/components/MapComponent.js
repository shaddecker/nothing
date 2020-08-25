import React, {Component} from 'react'
import axios from 'axios'

  
  class MapComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            APIbase:"https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.619048,-122.35384/15?mapSize=500,500&pushpin=47.620495,-122.34931&key=AtmZJw-7hg6FmS-GuGXJKoKQMMXFqiyrhTurRLJfOHDIlNxcB3vDnAP4pwLToq-d",
            // example: http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.619048,-122.35384/15?mapSize=500,500&pp=47.620495,-122.34931;21;AA&pp=47.619385,-122.351485;;AB&pp=47.616295,-122.3556;22&mapMetadata=1&o=xml&key={BingMapsAPIKey}
            APIkey:"AtmZJw-7hg6FmS-GuGXJKoKQMMXFqiyrhTurRLJfOHDIlNxcB3vDnAP4pwLToq-d",
            Map: null,
        }
    }
getMap = async(event) =>{
    event.preventDefault();
    let response = await axios.get((this.state.APIbase), {
        responseType: 'arraybuffer'
    }).then((data) =>{
        const b64Data = btoa(
            new Uint8Array(data.data).reduce(
                (dataArray, byte) => {
                    return dataArray + String.fromCharCode(byte);
                }, ''
            )
        );
        const mapData = {
            key: "map",
            value: `data:image/jpg;base64,${b64Data}`
        }
        this.setState({
            map: mapData.value,
        })
    })
    console.log(response)
}

    render(){
        return(
            <div>
                <button onClick={this.getMap}>GetMap</button>
                <img src={this.state.map} alt="map"/>

            </div>
        )
    }
  }

  export default MapComponent