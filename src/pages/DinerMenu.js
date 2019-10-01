import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import MenuHero from '../components/menu-parts/MenuHero';
import MenuInfo from '../components/menu-parts/MenuInfo';
import Footer from '../components/Footer';

export default class DinerMenu extends Component {
    render() {
        const { pages } = this.props;
        const menuPage = pages.filter(item => item.id === 'diningMenu');

        return (
        <>
            <Navigation theProps={this.props} />
            <MenuHero menuPage={menuPage} />
            <MenuInfo menuPage={menuPage} />
            <Footer />
        </>
        )
    }
}
