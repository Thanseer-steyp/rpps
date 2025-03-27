import React from 'react'
import CourseImage from "../assets/images/bg.jpg"
import StarIcon from "../assets/icons/star.svg"

function Courses(props) {
  return (
    <>
      <section id="courses">
            <section class="wrapper">
                <section class="courses">
                    <div class="head">
                        <h3>{props.course_title}</h3>
                        <a class="button" href="https://www.steyp.com">See All</a>
                    </div>
                    <div class="body">
                        <ul>
                            <li>
                               <img class="bg" src={CourseImage} alt="Course-Image"/>
                                <h3>Beginner’s Guide to Design</h3>
                                <small>By Ronald Richards</small> 
                                <div class="rating">
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img class="last" src={StarIcon} alt="Star-Icon"/>
                                    (1200 Ratings)
                                </div>
                                <p>22 Total Hours. 155 Lectures. Beginner</p>
                                <h3 class="price">$149.9</h3>
                            </li>
                            <li>
                               <img class="bg" src={CourseImage} alt="Course-Image"/>
                                <h3>Beginner’s Guide to Design</h3>
                                <small>By Ronald Richards</small> 
                                <div class="rating">
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} class="last" alt="Star-Icon"/>
                                    (1200 Ratings)
                                </div>
                                <p>22 Total Hours. 155 Lectures. Beginner</p>
                                <h3 class="price">$149.9</h3>
                            </li>
                            <li>
                               <img class="bg" src={CourseImage} alt="Course-Image"/>
                                <h3>Beginner’s Guide to Design</h3>
                                <small>By Ronald Richards</small> 
                                <div class="rating">
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} alt="Star-Icon"/>
                                    <img src={StarIcon} class="last" alt="Star-Icon"/>
                                    (1200 Ratings)
                                </div>
                                <p>22 Total Hours. 155 Lectures. Beginner</p>
                                <h3 class="price">$149.9</h3>
                            </li>
                            <li>
                               <img class="bg" src={CourseImage} alt="Course-Image"/>
                                <h3>Beginner’s Guide to Design</h3>
                                <small>By Ronald Richards</small> 
                                <div class="rating">
                                    <img src={StarIcon} alt='Star-Icon'/>
                                    <img src={StarIcon} alt='Star-Icon' />
                                    <img src={StarIcon} alt='Star-Icon' />
                                    <img src={StarIcon} alt='Star-Icon' />
                                    <img src={StarIcon} alt='Star-Icon' class="last"/>
                                    (1200 Ratings)
                                </div>
                                <p>22 Total Hours. 155 Lectures. Beginner</p>
                                <h3 class="price">$149.9</h3>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Courses
