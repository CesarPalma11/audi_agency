import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Rout from './rout';
import Footer from './pages/footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <React.Fragment>
    <Navbar />
    </React.Fragment>
    <Rout />
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App
