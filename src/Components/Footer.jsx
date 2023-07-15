import React from 'react'
import './footer.css'
import footer from '../Assests/olxMobileApp.f5579f77e849b600ad60857e46165516.webp'
import GooglePlay from '../Assests/get on Google Play.png'
import AppleStore from '../Assests/get on aplle.png'
import AppGallery from '../Assests/app gallery.png'
import { BsTwitter } from 'react-icons/bs'
import { BsPlayFill } from 'react-icons/bs'
import { BiLogoInstagram } from 'react-icons/bi'
import { RiFacebookLine } from 'react-icons/ri'
function Footer() {
    return (
        <>
            <div className="Upfooter footer">
                <div className="footerImg">
                    <img src={footer} alt="" />
                    <div className="imgContent">
                        <h2>
                            TRY THE OLX APP
                        </h2>
                        <p>
                            Buy, sell and find just about anything using the app on your mobile.
                        </p>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="getApp">
                    <p>GET OUR APP TODAY</p>
                    <div className="images">
                        <img src={AppleStore} alt="" className='AppImages' />
                        <img src={GooglePlay} alt="" className='AppImages' />
                        <img src={AppGallery} alt="" className='AppImages' />
                    </div>
                </div>
            </div>
            <footer className='mainFooter footer'>
                <section>

                    <ul>
                        <li>
                            POPULAR CATEGORIES
                        </li>
                        <li>Cars</li>
                        <li>Flats for Rent</li>
                        <li>Mobile Phoness</li>
                        <li>Jobs</li>
                    </ul>
                </section>
                <section>

                    <ul>
                        <li>
                            TRENDING SEARCHES
                        </li>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                </section>
                <section>

                    <ul>
                        <li>
                            ABOUT US
                        </li>
                        <li>About Dubizzle Group</li>
                        <li>OLX Blog</li>
                        <li>MContact Us</li>
                        <li>OLX for Businesses</li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li>
                            OLX
                        </li>
                        <li>
                            Help
                        </li>
                        <li>
                            Sitemap
                        </li>
                        <li>
                            Terms of use
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </section>
                <div className="followUs">
                    <p>FOLLOW US</p>
                    <div className="icons">
                        <span>
                            <RiFacebookLine />
                        </span>
                        <span>
                            <BsTwitter />
                        </span>
                        <span>
                            <BsPlayFill />
                        </span>
                        <span>
                            <BiLogoInstagram />
                        </span>

                    </div>
                </div>

                <div className="mainfooterImg">
                    <img src={AppleStore} alt="" className='' />
                    <img src={GooglePlay} alt="" className='' />
                    <img src={AppGallery} alt="" className='' />
                </div>
            </footer>

            <div className="downFooter">
                <div className="downFooterText">
                    <p>
                        Free Classifieds in Pakistan   . © 2006-2023 OLX
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
