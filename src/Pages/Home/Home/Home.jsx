import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import PopularFaculty from '../PopularFaculty/PopularFaculty';
import CoursesList from '../../CoursesList/CoursesList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularFaculty></PopularFaculty>
            <CoursesList></CoursesList>
            <Banner></Banner>
        </div>
    );
};

export default Home;