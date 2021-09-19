import React from 'react';
import axios from 'axios';
const h={
    itemAlign:'right',
    color:'blue',
    backgroundColor:'Black'

}
class Signin extends React.Component {

    
    
    constructor(){
       
       super();
       var inputText;
       this.inputText=React.createRef();
       this.state={
            Username:'Hi',
            Password:''
        };
        this.changeHandle=this.changeHandle.bind(this);
        this.InputText=this.InputText.bind(this);
        this.handleSubmit=this.handleSubmit(this);
    }
  
    changeHandle=(event) => {
       this.setState({

        Username:event.target.value,
        Password:event.target.value
        
       });
     // console.log(event.state.Username);
     // console.log(event.state.Password);
   }
   handleSubmit=(h)=>{
       //h.preventDefault();
      // alert(this.state.Username + this.state.Password)
      // h.prventDefault();
       alert(this.state.Username);
       //h.preventDefault();
       
       const user={
           username:this.state.Username,

       }
       axios.post("http://localhost:3000/api/userinfo",user)
       .then(res => console.log(res.data));
   }

   InputText(){
       this.inputText.current.focus();
   } 
    
    render(){
        return(

           // <button style={h}>Sign In</button>
           <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Username</label>
                   <input type="text" required onChange={this.changeHandle} onMouseMove={this.InputText}
                                      ref={this.inputText} value={this.state.Username} onchange={() => this.changeHandle()}></input>
                   <br></br>
                   <label>Password</label>
                   <input type="text"  onChange={this.changeHandle}></input>
                   <br></br>
                   <button type="submit" >Submit</button>
               </form>
           </div>

        )
    }
}
export default Signin;
