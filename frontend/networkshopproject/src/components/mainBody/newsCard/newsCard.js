import './newsCard.css'

export default function NewsCard (){
    return(
        <div className="newsCardContainer">
            <img src="news.jpg" alt="" />
            <h3>
                برنامه های آندروید 
            </h3>
            
            <p>
            تست عملکرد صحیح برنامه های آندرویدی و .....
            </p>
            <button>
                ادامه مطلب  
            </button>
            <hr />
            <div className="newsCardExInfo">
                <span className="newCardView"> 
                    <i class="fa-regular fa-eye"></i>
                    <p>
                        15 بازدید  /  
                    </p>
                </span>
                
                <span className="newCardViewTime">
                    <i class="fa-regular fa-clock"></i>
                    <p>
                        زمان مطالعه: 15 دقیقه   
                    </p>
                </span>
            </div>
        </div>
    )
}