import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Serve from './Pages/Serve/Serve'
import Give from './Pages/Give/Give'
import Global from './Pages/Global/Global'
import Contact from './Pages/Contact/Contact'
import LoginSignin from './Pages/LoginSignin'
import Blog_1 from './Pages/Blog_Posts/Blog_1'
import Blog_2 from './Pages/Blog_Posts/Blog_2'
import Blog_3 from './Pages/Blog_Posts/Blog_3'
import Blog_4 from './Pages/Blog_Posts/Blog_4'
import Blog_5 from './Pages/Blog_Posts/Blog_5'
import Blog_6 from './Pages/Blog_Posts/Blog_6'
import Blog_7 from './Pages/Blog_Posts/Blog_7'
import Blog_8 from './Pages/Blog_Posts/Blog_8'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Equipment from './Pages/Give/Equipment'

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
          <Route path='/Blog_2' element={<Blog_2/>}/>
          <Route path='/Blog_3' element={<Blog_3/>}/>
          <Route path='/Blog_4' element={<Blog_4/>}/>
          <Route path='/Blog_5' element={<Blog_5/>}/>
          <Route path='/Blog_6' element={<Blog_6/>}/>
          <Route path='/Blog_7' element={<Blog_7/>}/>
          <Route path='/Blog_8' element={<Blog_8/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
