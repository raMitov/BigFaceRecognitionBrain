import Navigation from './components/Navigation/Navigation.jsx'; 
import Logo from './components/Logo/Logo';  
import Rank from './components/Rank/Rank';

import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.jsx';  
import ParticlesComponent from './components/Particles/Particles.jsx';


import './App.css'

function App() {
  return (
    <>
      <ParticlesComponent id="particles" />  
      <Navigation />
        <Logo />
       <Rank />
       <ImageLinkForm />
       {/*
        <FaceRecognition /> */}
    </>
  )
}

export default App
