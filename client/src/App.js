import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Login/Login'
import ForgotPass from './Pages/Forgot_Password/ForgotPass';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Serve from './Pages/Serve/Serve'
import Give from './Pages/Give/Give'
import Equipment from './Pages/Give/Equipment'
import Global from './Pages/Global/Global'
import Sog from './Pages/Global/Sog'
import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'
import Blog_1 from './Pages/Blog_Posts/Blog_1'
import Blog_2 from './Pages/Blog_Posts/Blog_2'
import Blog_3 from './Pages/Blog_Posts/Blog_3'
import Blog_4 from './Pages/Blog_Posts/Blog_4'
import Blog_5 from './Pages/Blog_Posts/Blog_5'
import Blog_6 from './Pages/Blog_Posts/Blog_6'
import Blog_7 from './Pages/Blog_Posts/Blog_7'
import Blog_8 from './Pages/Blog_Posts/Blog_8'
import Form_1 from './Pages/Serve/Application Form/Application_Form_1'
import Form_2 from './Pages/Serve/Application Form/Application_Form_2'
import Form_3 from './Pages/Serve/Application Form/Application_Form_3'
import Form_4 from './Pages/Serve/Application Form/Application_Form_4'
import Spouse_Form from './Pages/Serve/Spouse Form/Spouse_Form';
import Pastor_Form from './Pages/Serve/Pastor Form/Pastor_Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/Login' element={<Login/> } />
          <Route path='/Forgot-Password' element={<ForgotPass/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Serve' element={<Serve/>}/>
          <Route path='/Give' element={<Give/>}/>
          <Route path='/Equipment' element={<Equipment/>}/>
          <Route path='/Global' element={<Global/>}/>
          <Route path='/Sog' element={<Sog/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Blog-1' element={<Blog_1/>}/>
          <Route path='/Blog-2' element={<Blog_2/>}/>
          <Route path='/Blog-3' element={<Blog_3/>}/>
          <Route path='/Blog-4' element={<Blog_4/>}/>
          <Route path='/Blog-5' element={<Blog_5/>}/>
          <Route path='/Blog-6' element={<Blog_6/>}/>
          <Route path='/Blog-7' element={<Blog_7/>}/>
          <Route path='/Blog-8' element={<Blog_8/>}/>
          <Route path='/Application-Form-page-1' element={<Form_1/>}/>
          <Route path='/Application-Form-page-2' element={<Form_2/>}/>
          <Route path='/Application-Form-page-3' element={<Form_3/>}/>
          <Route path='/Application-Form-page-4' element={<Form_4/>}/>
          <Route path='/Spouse-Form' element={<Spouse_Form/>}/>
          <Route path='/Pastor-Form' element={<Pastor_Form/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
