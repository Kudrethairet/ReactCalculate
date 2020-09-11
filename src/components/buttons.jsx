    import React, { Component } from 'react';


    class Buttons
     extends Component {



        buttonsComp = (toBut, fromBut) =>{
            const toButtons = this.state.buttons.filter(b => b.id >=toBut)
            const buttons = toButtons.filter(b => b.id <fromBut)

          //  console.log(buttons)

           return buttons
            //this.setState({buttons} )
        }

        state = { 
            buttons: [
                {id:0, value:0},
                {id:1, value:1},
                {id:2, value:2},
                {id:3, value:3},
                {id:4, value:4},
                {id:5, value:5},
                {id:6, value:6},
                {id:7, value:7},
                {id:8, value:8},
                {id:9, value:9}
            
            ]
         }

     

        render() { 
            return ( 
            
            <div className="buttoncontainer">
          
            
             <div className="button1-9">
             <div >
            {this.buttonsComp(7,10).map(button => <button onClick={()=>this.props.handleClick(button.value)} key={button.id} value={button.value} className="buttons">{button.value}</button>)}
            <button  id="operator" className="buttons" >&divide;</button>
             </div>
             <div >
            {this.buttonsComp(4,7).map(button => <button onClick={()=>this.props.handleClick(button.value)}  key={button.id} value={button.value} className="buttons">{button.value}</button>)}
            <button id="operator" className="buttons" >&times;</button>


             </div>
             <div >
            {this.buttonsComp(1,4).map(button => <  button  onClick={()=>this.props.handleClick(button.value)} key={button.id} value={button.value} className="buttons">{button.value}</button>)}
            <button className="buttons" id="operator">-</button>


             </div>
             </div>
             <div >
            {this.buttonsComp(0,1).map(button => <button key={button.id} value={button.value} className="buttons">{button.value}</button>)}
            <button className="buttons" id="operator">.</button>
            <button className="buttons" id="operator">+</button> 
            <button className="buttons" id="operator">=</button>

           

             </div>
             <div> </div>
             </div>
            
             
           );
        }
    }
     
    export default Buttons
    ;