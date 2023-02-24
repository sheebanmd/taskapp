import React from 'react';
import './App.css';
import Header from './Components/Header';
import MainComponent from './Components/MainComponent';
import Footer from './Components/Footer';
import SkillsComponent from './Components/SkillsComponent';
import BottomFooter from './Components/BottomFooter';

function App() {
  return (
    <div className="profile-pic">
      <Header />
      <MainComponent />
      <Footer />
      <SkillsComponent />
      <BottomFooter />
    </div>
  );
}

export default App;