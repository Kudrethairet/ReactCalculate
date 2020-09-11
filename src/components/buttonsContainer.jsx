import React, { Component } from 'react';
import Buttons from './buttons';
import Display from './display';

class ButtonContainer
 extends Component {
    state = {  }

    handleClick = (v) =>{
        console.log(v)
        return v;

      }

      

      handleResult=()=>{
          const result = this.handleClick
          console.log( result)

        return result;
      }
    render() { 

        
        return ( <div>

                <div className="displaycontainer">
                    <Display result =  {this.handleResult} />
            <Buttons     handleClick={this.handleClick}/>
            </div>

        </div>  );
    }
}
 
export default ButtonContainer
;