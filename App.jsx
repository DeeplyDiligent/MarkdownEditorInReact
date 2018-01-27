import React from 'react';
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph';

class App extends React.Component {
    
   constructor() {
      super();
		
      this.state = {
         data: ""
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
            <h4>Answer: {this.state.data}</h4>
         </div>
      );
   }
}
export default App

jQuery(document).ready(function ($) {
    $('span:contains("File")').each(function(i, obj) {
        if (obj.currentSrc.includes("pdf")){
            window.open(obj.parentNode.parentNode.href);
        }
    });
});