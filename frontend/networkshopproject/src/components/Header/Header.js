import './Header.css';
import NavBar from './navBar/navBar.js';



export default function Header(){
    return(
        <div className="headerContainer">
            <div className="headerHeadContainer"> 
                <div className="loginBtnSection">
                    <button>
                        <p>ورود / ثبت نام</p>
                        <i class="fa-solid fa-user"></i>
                    </button>
                    <a href="">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
                <div className="searchBar">
                    <input type="search" placeholder=" جستجو"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="logo">
                    <img src="./l.jpg" alt="" />
                </div>                
            </div>
            <div className="headerNavBarContainer">
                <NavBar />
            </div>
        </div>
    )
}