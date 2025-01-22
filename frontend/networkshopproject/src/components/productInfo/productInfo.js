import './productInfo.css'

export default function ProductInfo(){
    return(
        <div className="productInfoContainer">
            <img src="./pi.png" alt="" />

            <div className="productInfoText">
                <h2>raspberry pi</h2>

                <div className="productFeatures">
                    <div className="productFeaturesItems">
                        <h4>
                            feature1
                        </h4>
                        <p>
                            feature1 info
                        </p>
                    </div>
                    <div className="productFeaturesItems">
                        <h4>
                            feature2
                        </h4>
                        <p>
                            feature2 info
                        </p>
                    </div>
                    <div className="productFeaturesItems">
                        <h4>
                            feature3
                        </h4>
                        <p>
                            feature3 info
                        </p>
                    </div>
                </div>

                <p>
                    قیمت = <span>1</span> $
                </p>

                <button>افزودن به سبد کالا</button>
            </div>
        </div>
    )
}