
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blog/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Reviews from './Pages/Home/Reviews/Reviews';
import Service from './Pages/Home/Service/Service';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/Register/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
       <Route path="/" element= {<Home></Home>}> </Route>
       <Route path="/about" element={<About></About>}> </Route>
       <Route path="/Services"element={<Services></Services>}></Route>
       <Route path="/service/:serviceId"element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route> 
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
       <Route path="/checkout" element={
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
       }></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
