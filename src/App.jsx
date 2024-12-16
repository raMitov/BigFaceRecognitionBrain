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
      isSignedIn: false
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value); 
  }
  onButtonSubmit = () => {
    console.log('click');
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
       <Rank />
       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       </div>
       :(
        this.state.route === 'Signin' 
        ? <Signin onRouteChange={this.onRouteChange} />
        : <Register onRouteChange={this.onRouteChange} />
       ) 
      
       }
    </div>
  )
}
}

export default App
