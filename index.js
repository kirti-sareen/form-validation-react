import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',error:'' ,email:''   };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
handleChange(event)
  {
    this.setState({[event.target.name]:event.target.value});
  }
  handleSubmit(event)
  {
    const valid=this.validate();
    if(valid){
       alert('Name is' + this.state.value);
        this.setState({error:''});
    }
        event.preventDefault();   
  }
  validate()
  {
    let error="";
    if(!this.state.value)
    {
      error +="Name cannot be blank.";
    }
    if(this.isValidateEmail(this.state.email))
    {
      error +="Invalid email id";
    }
    // if error is obtained store in the setState
    if(error)
    {
      this.setState({error});
       return false;
    }
   return true;
  }
  isValidateEmail(mail) 
  {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      return (false)
  }
  render() {
     return (
      <div>
       <form onSubmit={this.handleSubmit}>
        Name <input type="text" value={this.state.value} onChange={this.handleChange} /> <br></br>
        email <input type="text" value={this.state.email} onChange={this.handleChange} /><br></br>
         {this.state.error}<br></br>
        <input type="submit" />
       </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
