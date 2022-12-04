import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom';

import Home from "./home/Home.js"
import Contact from "./contact/Contact"
import Service from "./services/Service"
import About from "./about/About"
import WhoWeAre from "./WhoWeAre/WhoWeAre"
import Nav from "./nav/Nav.js";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/nav' element= {<Nav />} />
        <Route exact path='/' element={< Home />} />
        <Route exavct path='/about' element ={<About />} />
        <Route exact path='/service' element = {<Service />} />
        <Route exact path='/contact' element = {<Contact />} />
        <Route exact path='/who' element = {<WhoWeAre />} />
        
      </Routes>
    </Router>
    
    </>
  );
}
export default App;
