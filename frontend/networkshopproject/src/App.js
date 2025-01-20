import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'


import Home from './pages/Home/Home';
import LogIn from './pages/logIn/logIn';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/logIn' element={<LogIn/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
