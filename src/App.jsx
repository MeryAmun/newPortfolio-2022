import React from 'react';
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Services, Testimonials } from './Components';

export const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}
export default App