import React from 'react'
import { Helmet } from 'react-helmet'
import SinglePageHeader from '../screens/SinglePageHeader'
import CourseDetailings from "../screens/CourseDetailing"
import CourseInfo from '../screens/CourseInfo'
import Syllabus from '../screens/Syllabus'
import Reviews from '../screens/Reviews'
import About from '../screens/About'
import Courses from '../screens/Courses'
import Footer from '../includes/Footer'

function Course({course_title}) {
  return (
    <>
        <Helmet>
            <title>Course | Web Development</title>
        </Helmet>
        
        <SinglePageHeader/>

        <CourseDetailings />

        <CourseInfo />

        <Syllabus />

        <Reviews />

        <About />

        <Courses course_title="More Courses Like This" />

        <Footer />


        
    </>
  )
}

export default Course