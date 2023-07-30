import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import GlobalStyles from "./GlobalStyles";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Homepage from "./Homepage";

import Acceuil from "./Acceuil";
import Apropos from "./Apropos";
import Projets from "./Projets";
import ContactFR from "./ContactFR";

const App = () =>  {

  // do something cool here

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="fr/" element={<Acceuil/>} />
                <Route path="fr/apropos" element={<Apropos />} />
                <Route path="fr/projets" element={<Projets />} />
                <Route path="fr/contactFR" element={<ContactFR />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

const MyHeader = styled.h1`
  font-family: "Vollkorn";
  font-size: 24px;
`

export default App
