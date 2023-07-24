import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import PopularFaculty from '../PopularFaculty/PopularFaculty';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularFaculty></PopularFaculty>
            <Banner></Banner>
        </div>
    );
};

export default Home;