import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/loginsignup/Signup'
import Login from './components/loginsignup/Login'
import Footer from './components/footer';
import Slider from './components/carousel';
import Event from './components/events/Event';
import Review from './components/Review';
import PreviousNextMethods from './components/pastevents';
import MainContent from './components/article/MainContent';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={[
            <>
              <Nav />
              <div style={{ marginBottom: '50px' }}>
                <Slider />
              </div>

              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Event />
              </div>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <PreviousNextMethods />
              </div>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <MainContent />
              </div>
              <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                <Review />
              </div>
              <Footer />
            </>         
          ]} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      
      </Routes> 
    </BrowserRouter>
 

    </>

  );
}

export default App;
