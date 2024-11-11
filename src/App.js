import './App.css';
import Home from './components/Home/Home.js';
import Navbar from './components/nav/navbar';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Carosel from './components/carosel/Carosel';
import Contacts from './components/Contactme/Contactme';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Porfolio'

function App() {
  return (
    <>
      <Navbar/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Carosel/>
        <Qualification/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
