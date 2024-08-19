import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Call from './components/Call';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/Course';
import Grading from './components/Grading';
import Hirer from './components/Hirer';
import './assets/css/main.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Call />
      <Footer />
      <Courses />
      <Grading />
      <Hirer />
    </div>
  );
}

export default App;
