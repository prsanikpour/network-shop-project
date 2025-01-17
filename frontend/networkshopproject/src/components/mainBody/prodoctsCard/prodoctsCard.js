import './productsCard.css'

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
            <button>
                خرید    
            </button>
        </div>
    )
}