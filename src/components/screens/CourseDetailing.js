import React from 'react'
import ShortArrow from "../assets/icons/short-arrow-right-black.svg"
import StarIcon from "../assets/icons/star.svg"
import Instructor from "../assets/icons/span-8.svg"
import Language from "../assets/icons/language.svg"
import instructorBg from "../assets/images/img.jpg"
import FacebookLogo from '../assets/images/fb logo.png'
import TwitterLogo from '../assets/images/tx logo.png'
import MicrosoftLogo from '../assets/images/ms logo.png'
import GitLogo from '../assets/images/git logo.png'
import GoogleLogo from '../assets/images/google logo.png'

function CourseDetailing() {
  return (
    <>
    <section id="courseDetail">
        <section className="wrapper">
            <section className="courseDetail">
            <div className="leftContainer">
                <div className="path">
                    <small>Home</small>
                    <img src={ShortArrow} alt="Arrow" />
                    <small>Categories</small>
                    <img src={ShortArrow} alt="Arrow" />
                    <small className='courseTitle'>Introduction</small>
                </div>
                <h2>Introduction to User</h2>
                <p>This course is meticulously crafted to provide you with 
                    a foundational understanding of the principles, 
                    methodologies, and tools that drive 
                    exceptional user experiences in the digital landscape.
                </p>
                <div className="ratingDetails">
                    <b>4.6</b>
                    <div className="ratingstar">
                        <img src={StarIcon} alt="StarIcon" />
                        <img src={StarIcon} alt="StarIcon" />
                        <img src={StarIcon} alt="StarIcon" />
                        <img src={StarIcon} alt="StarIcon" />
                        <img src={StarIcon} alt="StarIcon" />
                    </div>
                    <small>(651651 rating) | 22 Total Hours. 155 Lectures. All levels.</small>
                </div>
                <div className="instructorDetails">
                    <div className="instructorImage">
                        <img src={Instructor} alt="Instructor" />
                    </div>
                    <h6>Created by Ronald Richards</h6>
                </div>
                <div className="languageDetails">
                    <img src={Language} alt="Lang-Icon" />
                    <small>English, Spanish, Italian, German</small>
                </div>
            </div>
            <div className="rightContainer">
                <div className="instructorBg">
                    <img src={instructorBg} alt="Instructor-Bg" />
                </div>
                <div className="pricingDetails">
                    <b className='offer'>$49.5</b>
                    <b className='pricing'>$99.5</b>
                    <b className='off'>50% Off</b>
                </div>
                <a href="https://www.steyp.com" className="addToCartButton">Add to Cart</a>
                <a href="https://www.steyp.com" className="buyNowButton">Buy Now</a>
                <hr />
                <small className="share">Share</small>
                <ul>
                    <li><a href="https://www.facebook.com/" target="blank"><img src={FacebookLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://github.com/" target="blank"><img src={GitLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://www.google.co.in/" target="blank"><img src={GoogleLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://x.com/?lang=en" target="blank"><img src={TwitterLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://www.microsoft.com/en-in" target="blank"><img src={MicrosoftLogo} alt='Facebook-Logo' /></a></li>
                </ul>
            </div>
            </section>
        </section>
    </section> 
    </>
  )
}

export default CourseDetailing
