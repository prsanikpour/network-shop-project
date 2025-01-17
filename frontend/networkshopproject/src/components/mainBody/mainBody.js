import './mainBody.css'
import ProdductsCard from './prodoctsCard/prodoctsCard'
import NewsCard from './newsCard/newsCard'
import ExteraInfo from './exteraInfo/exteraInfo'

export default function MainBody(){
    return(
        <div className="mainBodyContainer">
            <div className="famProducsTitel">
                <h2>
                    پرفروش ترین محصولات     
                </h2>
            </div>
            <div className="famProducts">
                <ProdductsCard/>
                <ProdductsCard/>
                <ProdductsCard/>
                <ProdductsCard/>
            </div>

            <div className="newProducsTitel">
                <h2>
                    جدیدترین محصولات       
                </h2>
            </div>
            <div className="newProducts">
                <ProdductsCard/>
                <ProdductsCard/>
                <ProdductsCard/>
                <ProdductsCard/>
            </div>

            <div className="newsCardTitle">
                <h2>
                    آخرین مقالات
                </h2>
            </div>
            <div className="newsCards">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>

            <div className="exteraInfo">
            <ExteraInfo/>
            </div>


        </div>
    )
}