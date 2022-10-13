import React, { useContext } from "react";
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import './App.css';
import { themeContext } from "./Conext";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor:darkMode ? "#222" : "white",
      color: darkMode && "white"}}>
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <ProjectList/>
    <Contact/>
  </div>
  );
};

export default App;