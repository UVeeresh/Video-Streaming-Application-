import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import searchmovies from './Searchmovies.js';
import Welcomew from './Welcomew.js';
import Search from './Search.js';
import Signin from './Signin.js';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import Home from './Home.js';

const h={

  backgroundColor:'Yellow',
  fontSize:'80px',
  textAlign:'center',

}
class App_Webtech extends React.Component {
  render(){
    return(
      <div classname="container">

       
       <h1 style={h} ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1tDu732uPBXuq0XVkZ6wt5eDrfKl2szbVQ&usqp=CAU'width='100px' height='100px'></img>Video Streaming Application</h1>
       
       <Welcomew></Welcomew>
       <p align='center'><Search></Search></p> 
       <marquee><img src='https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/iylia/lifestyle/nonetflix.jpg?ext=.jpg' width='350px' height='350px'></img><img src='https://i.pinimg.com/originals/12/16/8e/12168e11cf1dacadc00865fe19e8361b.jpg' width='350px' height='350px'></img></marquee>
      </div>
    )
  }


}
ReactDOM.render(
  <Router>
    <App_Webtech></App_Webtech>
    <Link to="/Signin"><button>Sign In</button></Link>
    <Link to="/Home"><Welcomew></Welcomew></Link>
    <Switch>
    <Route path="/Signin" component={Signin}/>
    <Route path="/Home" component={Home}/>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
