import React from 'react'
import { Helmet } from 'react-helmet'
import SinglePageHeader from '../screens/SinglePageHeader'
import CourseDetailingSection from "../screens/CourseDetailingSection"
import CourseFeatures from '../screens/CourseFeatures'
import SyllabusSection from '../screens/SyllabusSection'
import ReviewsSection from '../screens/ReviewsSection'
import AboutSection from '../screens/AboutSection'
import Courses from '../screens/CoursesSection'
import Footer from '../screens/Footer'

function Course({course_title}) {
  return (
    <>
        <Helmet>
            <title>Course | Web Development</title>
        </Helmet>
        
        <SinglePageHeader/>

        <CourseDetailingSection />

        <CourseFeatures />

        <SyllabusSection />

        <ReviewsSection />

        <AboutSection />

        <Courses course_title="More Courses Like This" />

        <Footer />


        
    </>
  )
}

export default Course