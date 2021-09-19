import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
class Search extends React.Component{
    constructor(){
       super();
       var inputText;
       //var handleButtonClick;
       this.inputText=React.createRef();
       this.InputText=this.InputText.bind(this);
       this.state={
          movies:"",
       };
       this.handleButtonClick=this.handleButtonClick.bind(this);
       this.handleClick=this.handleClick.bind(this);
    }
    handleButtonClick=(h)=>{
      alert(this.state.movies);
      h.preventDefault();
      axios.get('http://localhost:3000/api/trending/')//function(err,res){//
      .then(res => {
         // if(err)
         // {
         //     console.log("Button dosen't Work");
         // }else{
          console.log(res);
          this.setState({
              movies: h.target.value,
            });//,() => alert("You have searched",this.state.movies));
   });
}
  handleClick=(h)=> {
    
   alert(this.state.movies);
   h.preventDefault();
  }
  handleMovieChange=(event) =>{
      this.setState({
          movies:event.target.value,
      },()=> console.log(this.state.movies))
  }
    InputText(){
        this.inputText.current.focus();
     }
render(){
    return(
       <form classname='form' onSubmit={this.handleButtonClick}>
                <label classname='label' htmlfor="query">Movie Name</label>
                <input classname="input" type="text" name="query"
                   placeholder="i.e.Jurassic Park" ref={this.inputText} onMouseMove={this.InputText} value={this.state.movies} onChange={this.handleMovieChange}/>
                <button classname="button" type="submit" >Search</button>   
            
        </form>
    );
    } 
}
export default Search;
