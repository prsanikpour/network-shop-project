import './navBar.css'
import {Link} from 'react-router-dom'


export default function NavBar(){
    return(
        <div className="navBarContainer">
            <div className="navBar">
                <ul>
                    <li>
                        <Link to="/Home">
                            <a href="#" className='navBarItemLink'>خانه</a>
                        </Link>
                    </li>
                    <li><a href="#" className='navBarItemLink'>محصولات</a></li>
                    <li>
                        <Link to="/ContactUs">
                            <a href="#" className='navBarItemLink'>
                                تماس باما
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/AboutUs'>
                            <a href="#" className='navBarItemLink'>درباره ما</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}