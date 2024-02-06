import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Experince from './pages/Experince';
  import Education from './pages/Education';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from "./pages/footer";
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About/>}/>
        <Route path='Skills' element={<Skills/>}/>
        <Route path='Experince' element={<Experince/>}/>
        <Route path='Education' element={<Education/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='footer' element={<Footer/>}/>
      </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>                                                                                                                                                                                 
  );
}
export default App