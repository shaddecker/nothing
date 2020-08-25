import React, {Component} from 'react'
  
class MapPopup extends Component{
    constructor(props){
        super(props)
    }
    handleClick = () => {
       this.props.mapVisible();
    };

    render() {
      return (
        <div className="modalWindow">
            <div className="modalContent" onClick={this.handleClick}>
            <img src={this.props.map} alt="map"/>
            </div>
        </div>
      );
     }
    }

  export default MapPopup