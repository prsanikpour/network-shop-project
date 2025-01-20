import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'


import Home from './pages/Home/Home';
import LogIn from './pages/logIn/logIn';
import ContactUs from './pages/contactUs/contactUs';
import AboutUs from './pages/abutUs/aboutUs';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/logIn' element={<LogIn/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
