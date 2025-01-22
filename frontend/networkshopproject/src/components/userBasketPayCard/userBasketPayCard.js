import './userBasketPayCard.css'

export default function UserBasketPayCard(){
    return(
        <div className='userBasketPayCardContainer'>
            <h2>
                total
            </h2>
            <hr />

            <div className="userBasketPayCardInfo">
                <ul>
                    <li>
                        <h4>
                            raspberry pi
                        </h4>
                        <span>1$</span>
                    </li>
                    <li>
                        <h4>
                            raspberry pi
                        </h4>
                        <span>1$</span>
                    </li>
                    <li>
                        <h4>
                            raspberry pi
                        </h4>
                        <span>1$</span>
                    </li>
                </ul>

                <div className="userBasketPayCardTotalPrice">
                    <h3>
                        total price
                    </h3>
                    <span>3$</span>
                </div>

            </div>

            <hr />

            <button className='userBasketPayCardPayBtn'>پرداخت</button>
        </div>
    )
}