import React from "react";

class Register extends React.Component {
  constructor(props){
    super();
    this.state = {
      Email: '',
      Password: '',
      Name: ''
    }
  }
  onNameChange =(event) =>{
    this.setState({Name: event.target.value})
  }
  onEmailChange =(event) =>{
    this.setState({Email: event.target.value})
  }
  onPasswordChange =(event) =>{
    this.setState({Password: event.target.value})
  }
  onSubmitSignin = () => {
    fetch('http://localhost:3000/Register', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: this.state.Email,
        password: this.state.Password,
        name: this.state.Name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user){
        this.props.loadUser(user)
        this.props.onRouteChange('home')

      }
    })
  }
  render(){
    const {onRouteChange} = this.props;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
    <div className="measure">
      <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlfor="name">Name</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="text"
           name="name"
            id="name"
            onChange={this.onNameChange} />
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address" 
           id="email-address"
           onChange={this.onEmailChange} />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
           type="password"
            name="password" 
            id="password"
            onChange = {this.onEmailChange} />
        </div>
      </fieldset>
      <div className="">
        <input
        onClick={this.onSubmitSignin}
         className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
         type="submit" 
         value="Register" />
      </div>
      <div class="lh-copy mt3">
      </div>
    </div>
  </main>
  </article>
  
    )
  }
  
}
export default Register;