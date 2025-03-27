import React from 'react'
import { Helmet } from "react-helmet";
import FavIcon from "../assets/icons/logo.ico"

import Header from "../screens/Header"
import SpotlightSection from '../screens/SpotlightSection';
import StatsSection from '../screens/StatsSection';
import CategoriesSection from '../screens/CategoriesSection';
import CoursesSection from '../screens/CoursesSection';
import InstructorsSection from '../screens/InstructorsSection';
import AboutSection from '../screens/AboutSection';
import ExploreSection from '../screens/ExploreSection';
import Footer from '../screens/Footer';

function Home(course_title) {
  return (
    <>
        <Helmet>
            <title>Byway</title>
            <link rel="icon" href={FavIcon} type="image/svg+xml"/>
        </Helmet>

        <Header />

        <SpotlightSection/>

        <StatsSection/>

        <CategoriesSection/>

        <CoursesSection course_title="Top Courses" />

        <InstructorsSection/>

        <AboutSection />

        <ExploreSection/>

        <Footer/>
    </>
  )
}

export default Home