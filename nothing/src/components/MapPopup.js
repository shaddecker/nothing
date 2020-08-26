import React, {Component} from 'react';
import Modal from "react-modal";
import style from "./Component.css";  

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

Modal.setAppElement(document.getElementById('root'));

class MapPopup extends Component {
  constructor(props){
    super(props)
    this.state = {
      windowOpened: false,
    }
  }
    
  toggleShowMap = () => {
    this.setState({windowOpened: !this.state.windowOpened});
  }

  
  render() {
    console.log(this.props.mapData, this.state.windowOpened)
  return (
        <div>
        <button className="button" onClick={this.toggleShowMap}>Show Map </button><br />
        <Modal 
          isOpen={this.state.windowOpened}
          onRequestClose={this.toggleShowMap}
          style={customStyles}
          contentLabel="Modal with image"
        >
          <div className="contentTitle">Your Location (or pretty close to it)</div>
          <img
            onClick={this.toggleShowMap}
            src={this.props.mapData}
            alt=''
          />          
        </Modal>        
        </div>
      );
  }
}

  export default MapPopup;