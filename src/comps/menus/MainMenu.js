import Link from 'next/link';
import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

const MainMenu = () => {
    useEffect(() => {
        $('.mobile-menu a').on('click', function () {
            $('.main-menu-wrap').addClass('open');
            $('.mobile-bar-wrap.style2 .mobile-menu').addClass('open');
        });

        $('.mobile_menu a').on('click', function () {
            $(this).parent().toggleClass('open');
            $('.main-menu-wrap').toggleClass('open');
        });

        $('.menu-close').on('click', function () {
            $('.main-menu-wrap').removeClass('open')
        });
    }, []);


    return <header className="header-wrap style1">
        <div className="header-top bg-white">
            <div className="close-header-top xl-none">
                <button type="button"><i className="las la-times"></i></button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="header-top-left">
                            {/* <Link href="/">
                                <a href="/" className="logo lg-none"><img src="assets/img/logo.png" alt="Image" /></a>
                            </Link> */}
                            <p className="present-date"><i className="las la-clock"></i>{format(new Date(), "eeee', 'd'/'L'/'yyyy", { locale: vi })}</p>
                            {/* <div className="trending-news lg-none">
                                <h6><i className="lab la-gripfire"></i>Trending</h6>
                                <div className="news">
                                    <ul className="list-style">
                                        <li><a href="#">Norway Business Knows How To Treat Dogs</a></li>
                                        <li><a href="#">Lorem, ipsum dolor sit amet.</a></li>
                                        <li><a href="#">Consectetur adipisicing elit Quasi repellendus</a></li>
                                        <li><a href="#">The first line of Lorem Ipsum ipsum dolor</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="select_lang xl-none">
                                <div className="navbar-option-item navbar-language dropdown language-option">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="las la-globe"></i>
                                        <span className="lang-name"></span>
                                    </button>
                                    <div className="dropdown-menu language-dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/img/uk.png" alt="flag" />
                                            Eng
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/img/china.png" alt="flag" />
                                            Vietnamese
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="user-option xl-none">
                                <img src="assets/img/user.jpg" alt="Image" />
                                <span> Alexandra</span>
                                <ul className="user-menuitem list-style">
                                    <li><a href="login.html">My Profile</a></li>
                                    <li><a href="login.html">Settings</a></li>
                                    <li><a href="login.html">Logout</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-3">
                        <div className="header-top-right">
                            <button type="button" className="searchbtn lg-none"><i className="flaticon-search-interface-symbol"></i></button>
                            <a className="subscribe-btn" href="login.html">Subscribe Now</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="header-bottom bg-black">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-4 xl-none">
                        {/* <a href="index.html" className="logo">
                            <img src="assets/img/logo-white.png" alt="IMage" />
                        </a> */}
                    </div>
                    <div className="col-lg-8 col-md-6 col-8">
                        <div className="main-menu-wrap style1">
                            <div className="menu-close xl-none">
                                <a><i className="las la-times"></i></a>
                            </div>
                            <div id="menu">
                                <ul className="main-menu list-style">
                                    <li>
                                        <Link href="/">
                                            <a>Trang chủ</a>
                                        </Link>
                                        {/* <ul className="sub-menu list-style">
                                            <li>
                                                <a className="active" href="index.html">Home 1</a>
                                            </li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                        </ul> */}
                                    </li>
                                    <li>
                                        <Link href="/baiviet">
                                            <a>Bài Viết</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tho">
                                            <a>Thơ</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/van">
                                            <a>Văn</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tranh">
                                            <a>Tranh</a>
                                        </Link>
                                    </li> */}
                                    {/* <li className="has-children">
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu list-style">
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="author-details.html">Author</a></li>
                                            <li>
                                                <a href="video-gallery.html">Video Gallery</a>
                                            </li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="shop.html">Shop Page</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="login.html">login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                                            <li><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-bar-wrap">
                            {/* <button type="button" className="searchbtn xl-none"><i className="flaticon-search-interface-symbol"></i></button> */}
                            {/* <button className="sidebar-menu xl-none" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="mobile-top-bar xl-none">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            <div className="mobile-menu xl-none">
                                <a><i className="las la-bars"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 lg-none">
                        <div className="header-bottom-right">
                            <div className="select_lang">
                                <div className="navbar-option-item navbar-language dropdown language-option">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="las la-globe"></i>
                                        <span className="lang-name"></span>
                                    </button>
                                    <div className="dropdown-menu language-dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/img/uk.png" alt="flag" />
                                            Eng
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/img/china.png" alt="flag" />
                                            简体中文
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/img/uae.png" alt="flag" />
                                            العربيّة
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="user-option">
                                <img src="assets/img/user.jpg" alt="Image" />
                                <span> Alexandra</span>
                                <ul className="user-menuitem list-style">
                                    <li><a href="login.html">My Profile</a></li>
                                    <li><a href="login.html">Settings</a></li>
                                    <li><a href="login.html">Logout</a></li>
                                </ul>
                            </div>
                            <button className="sidebar-menu" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="search-area">
            <div className="container">
                <button type="button" className="close-searchbox">
                    <i className="las la-times"></i>
                </button>
                <form action="#">
                    <div className="form-group">
                        <input type="search" placeholder="Search Here" autoFocus />
                    </div>
                </form>
            </div>
        </div>
    </header>
};

export default MainMenu;