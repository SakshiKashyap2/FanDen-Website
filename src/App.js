import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/loginsignup/Signup'
import Login from './components/loginsignup/Login'
import Footer from './components/footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Nav/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      
      </Routes> 
    </BrowserRouter>
    <Footer/>
 

    </>

  );
}

export default App;
