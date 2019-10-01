import React, { Component } from 'react';
import 'react-router-dom';

import Navigation from '../components/Navigation';
import Hero from '../components/home-parts/Hero';
import Reservation from '../components/home-parts/Reservation';
import CuisineInfo from '../components/home-parts/CuisineInfo';
import FoodGallery from '../components/home-parts/FoodGallery';
import Parallax from '../components/home-parts/Parallax';
import Footer from '../components/Footer';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { pages } = this.props;
        return (
    
        <>   
            <Navigation theProps={this.props} />
            <Hero pages={pages} />
            <Reservation pages={pages} />
            <CuisineInfo pages={pages} />
            {/* <FoodGallery pages={pages} /> */}
            <Parallax pages={pages} />
            <Footer />
        </>

        );
    }
}

