
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blog/Blogs';
import Home from './Pages/Home/Home/Home';
import Reviews from './Pages/Home/Reviews/Reviews';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path="/" element= {<Home></Home>}> </Route>
       <Route path="/about" element={<About></About>}> </Route>
       <Route path="/Services"element={<Services></Services>}></Route>
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route> 
     </Routes>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
