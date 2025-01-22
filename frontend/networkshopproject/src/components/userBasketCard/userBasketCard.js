import './userBasketCard.css'

export default function UserBasketCard(){
    return(
        <div className="userBasketCardContainer">
            <div className="userBasketCardInfo">
                <div className="userBasketCardTitle">
                    <h4>
                        raspberry pi
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>

                    <h4>
                        price = 1$
                    </h4>
                </div>
                <img src="pi.png" alt="" />
            </div>

            <hr />

            <div className="userBasketCardStatus">
                <div className="userBasketCardDate">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>
                        1999/99/99
                    </span>
                </div>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}