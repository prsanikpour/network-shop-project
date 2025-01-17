import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/mainBody/mainBody';





function App() {
  return (
    <div className="App">
      
      <div className="Header">
        <Header/>
      </div>

      <div className="mainBody">
        <MainBody/>
      </div>
    </div>
  );
}

export default App;
