import React from 'react';
import axios from 'axios';
class Searchmovies extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: "Yet to be Searched"
        };
    }
    handleButtonClick = (h) => {
        h.preventDefault();
        axios.get('http://localhost:3000/api/trending/:Movie_name')//function(err,res){//
        .then(res => {
           // if(err)
           // {
           //     console.log("Button dosen't Work");
           // }else{
            console.log(res);
            this.setState({
                movies: res.Movie_name
            });
        });
    };

    render(){

    
        return(
            <div>
            <form classname='form'>
                <label classname='label' >Movie Name {this.state.movies}</label>
                <input classname="input" type="text" 
                   placeholder="i.e.Jurassic Park"/>
                <button classname="button"  onClick={this.handleButtonClick}>Search</button>   
            </form>
            </div>
        )
    }
}

export default Searchmovies;