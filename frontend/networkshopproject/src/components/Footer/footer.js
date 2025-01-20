import './footer.css'

export default function Footer(){
    return(
        <div>
            <div className="footerContainer">
                <div className="generalInfoContainer">
                    <div className="generalInfo">
                        <img src="l.jpg" alt="" />
                        <div className="generalInfoTitel">
                            <p>
                            اورجیکا قالب مناسب و بهینه شده و مورد اطمینان برای استفاده در انواع پروژه های فروشگاهی است
                            </p>

                            <span>
                            <i class="fa-solid fa-house"></i>
                            اورجیکا فعالیت خود را بر اساس اصول تجارت الکترونیک شروع کرد 
                            </span>

                            <span>
                            <i class="fa-solid fa-envelope"></i>
                            info@yourdomain.com
                            </span>
                        </div>
                    </div>

                    <div className="footerNavBar">
                        <h4>
                        لینک‌های مفید
                        </h4>

                        <div className="footerNavBarItems">
                            <ul>
                                <li>
                                    <a href="">
                                    صفحه اصلی
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                    سوالات متداول
                                    </a>
                                </li>

                                <li>
                                    <a href="">
                                    شرایط بازگشت کالا
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                    قوانین و مقررات
                                    </a>
                                </li>
                            </ul>
                        </div>  
                    </div>
                

                    <div className="footerSocialMedia">
                        <h4>
                        شبکه های اجتماعی ما
                        </h4>
                        <div className="footerSocialMediaItem">
                            <ul>
                                <li>
                                    <a href="">
                                        <i class="fa-brands fa-telegram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}