import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler(evt) {
       try {
            var myString = eval(evt.target.value); 
        } catch (e) {
            var myString = "Expression Invalid!"
        }
      this.setState({data: myString})
   };
   render() {
      return (
         <div>
            <input type="text" onKeyUp = {evt => this.setStateHandler(evt)}></input>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default App