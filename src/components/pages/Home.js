import React from 'react'
import { Helmet } from "react-helmet";
import FavIcon from "../assets/icons/logo.ico"

import Header from "../includes/Header"
import Spotlight from '../screens/Spotlight';
import Stats from '../screens/Stats';
import Categories from '../screens/Categories';
import Courses from '../screens/Courses';
import Instructors from '../screens/Instructors';
import About from '../screens/About';
import Explore from '../screens/Explore';
import Footer from '../includes/Footer';

function Home(course_title) {
  return (
    <>
        <Helmet>
            <title>Byway</title>
            <link rel="icon" href={FavIcon} type="image/svg+xml"/>
        </Helmet>

        <Header />

        <Spotlight/>

        <Stats/>

        <Categories/>

        <Courses course_title="Top Courses" />

        <Instructors/>

        <About />

        <Explore/>

        <Footer/>
    </>
  )
}

export default Home