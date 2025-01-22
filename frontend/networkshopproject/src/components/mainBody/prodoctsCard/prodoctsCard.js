import './productsCard.css'
import {Link} from 'react-router-dom'


export default function ProdductsCard(){
    return(
        <div className="productCardContainer">
            <img src="./pi.png" alt="" />
            <h3>
                raspberry pi 
            </h3>
            <p>
                1$
            </p>
            <Link to='/ProductPage'>

                <button className='productCardBtn'>
                    خرید    
                </button>

            </Link>
            
        </div>
    )
}