import './userBasket.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import UserBasketCard from '../../components/userBasketCard/userBasketCard'
import UserBasketPayCard from '../../components/userBasketPayCard/userBasketPayCard'

export default function UserBasket(){
    return(
        <div>
            <Header/>
            <div className='userBasket'>
                <div className="userBasketCard">
                    <UserBasketCard/>
                    <UserBasketCard/>
                    <UserBasketCard/>
                </div>
                <div className="userBasketPayCard">
                    <UserBasketPayCard/>
                </div>
            </div>  
        <Footer/>
        </div>
    )
}