import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Information from './components/Information';
import Courses from './components/Courses';
import Thesis from './components/Thesis';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,     
      offset: 100,    
    });
  }, []);
  return (
    <div className="App overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Information />
        <Courses />
        <Thesis />
      </main>
      <Footer />
    </div>
  );
}

export default App;