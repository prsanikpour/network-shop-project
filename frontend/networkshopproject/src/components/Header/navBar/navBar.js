import './navBar.css'


export default function NavBar(){
    return(
        <div className="navBarContainer">
            <div className="navBar">
                <ul>
                    <li><a href="#">خانه</a></li>
                    <li><a href="#">محصولات</a></li>
                    <li><a href="#">تماس باما</a></li>
                    <li><a href="#">درباره ما</a></li>
                </ul>
            </div>
        </div>

    )
}