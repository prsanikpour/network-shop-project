import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/mainBody/mainBody';
import Footer from './components/Footer/footer';




function App() {
  return (
    <div className="App">
      
      <div className="Header">
        <Header/>
      </div>

      <div className="mainBody">
        <MainBody/>
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
