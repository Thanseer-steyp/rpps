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

import { useEffect } from 'react'

function Course({course_title}) {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <>
        <Helmet>
            <title>Course | Web Development</title>
            <link rel="icon" type="image/svg+xml" href="../assets/icons/logo.svg" />
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