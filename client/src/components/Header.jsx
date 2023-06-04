import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <header>
        <h6>Live Discuss ! <FontAwesomeIcon style={{fontSize:18,marginLeft:4}}icon={faMessage}/></h6>
    </header>
    
  )
}

export default Header