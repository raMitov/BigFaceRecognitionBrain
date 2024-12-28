import Navigation from './components/Navigation/Navigation.jsx'; 
import Logo from './components/Logo/Logo';  
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx';  
import ParticlesComponent from './components/Particles/Particles.jsx';
import Signin from './components/Signin/Signin.jsx';
import Register from './components/Register/Register.jsx';
import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      route: 'Signin',
      isSignedIn: false,
      user:{
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email ,
      entries: data.entries,
      joined: data.joined
  }})
  }
  onInputChange = (event) => {
    console.log(event.target.value); 
  }
  onButtonSubmit = () => {
    this.setState();
    fetch('http://localhost:3000/image', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        id: this.state.user.id
      })
    })
  }
  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    }
    else if(route === 'home'){
      this.setState({isSignedIn: true})  
    }
     this.setState({route: route})
  }
  render(){
  return ( 
    <div className='App'>
      <ParticlesComponent id="particles" />  
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
      { this.state.route === "home" ?
      <div>
      <Logo />
       <Rank
       name={this.state.user.name}
       entries={this.state.user.entries}
        />
       <ImageLinkForm
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
       </div>
       :(
        this.state.route === 'Signin' 
        ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
       ) 
      
       }
    </div>
  )
}
}

export default App
