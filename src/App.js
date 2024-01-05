import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/react-portfolio/' element = {<Layout/>}>
        <Route path = '/react-portfolio/' element = {<Home/>}/> 
        <Route path='react-portfolio/about' element = {<About/>}/> 
        <Route path='react-portfolio/contact' element = {<Contact/>}/> 
      </Route>
    </Routes>
    </>
  );
}

export default App;
