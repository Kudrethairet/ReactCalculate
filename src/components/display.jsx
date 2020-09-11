import React, { Component } from 'react';
import Buttons from './buttons';


class Display extends Component {

    

    state = {  
        result: [
            
        ]
      
    }



    updateResult=()=>{
        const result = this.state.result.join('a');
        this.setState(result);
    }

    
   
    render() { 
        return (
            <div>
                
                <div className="displaybox">
        <h4 className="result" >{this.props.result}</h4>
                </div>
            </div>
          );
    }
}
 
export default Display;