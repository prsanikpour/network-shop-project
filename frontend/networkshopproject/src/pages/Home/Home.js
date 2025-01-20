import './Home.css'
import Header from '../../components/Header/Header';
import MainBody from '../../components/mainBody/mainBody';
import Footer from '../../components/Footer/footer';

export default function Home(){
    return(
        <div>
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
    )
}