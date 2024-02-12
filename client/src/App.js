import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Serve from './Pages/Serve'
import Give from './Pages/Give'
import Global from './Pages/Global'
import Contact from './Pages/Contact'
import LoginSignin from './Pages/LoginSignin'
import Blog_1 from './Pages/Blogs/Blog_1'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Equipment from './Pages/Equipment'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignin/> } />
          <Route path='/Home' element={<Home/> } />
          <Route path='/About' element={<About/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Serve' element={<Serve/>}/>
          <Route path='/Give' element={<Give/>}/>
          <Route path='/Global' element={<Global/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Equipment' element={<Equipment/>}/>
          <Route path='/Blog_1' element={<Blog_1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
