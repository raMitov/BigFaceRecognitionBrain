import Navigation from './components/Navigation/Navigation.jsx'; 
import Logo from './components/Logo/Logo';  
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx';  
import ParticlesComponent from './components/Particles/Particles.jsx';
import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value); 
  }
  onButtonSubmit = () => {
    console.log('click');
  }
  render(){
  return (
    <>
      <ParticlesComponent id="particles" />  
      <Navigation />
        <Logo />
       <Rank />
       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       {/*
        <FaceRecognition /> */}
    </>
  )
}
}

export default App
