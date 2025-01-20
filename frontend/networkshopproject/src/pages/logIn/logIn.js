import './logIn.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import LogInfForm from '../../components/logInForm/logInForm'
export default function LogIn(){
    return(
        <div>
            <Header/>

            <div className='logInForm'>
                <LogInfForm/>
            </div>
            <Footer/>
        </div>
    )
}