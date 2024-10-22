import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfollio from './components/Portfollio';
import Experience from './components/Experience';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <Portfollio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
