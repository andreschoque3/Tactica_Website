import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Serve from './Pages/Serve'
import Give from './Pages/Give'
import Global from './Pages/Global'
import Contact from './Pages/Contact'
import LoginSignin from './Pages/LoginSignin'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
