import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import DiningInfo from '../components/dining-parts/DiningInfoBackup';
import DiningReservation from '../components/dining-parts/DiningReservation';
import Footer from '../components/Footer';

export default class DiningRoom extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        const { pages } = this.props;
        const diningPage = pages.filter(item => item.id === 'diningRoom');
        console.log(diningPage);
        return (
        <>
            <Navigation theProps={this.props} />
            <DiningInfo theProps={this.props} 
                        diningPage={diningPage} />
            <DiningReservation 
                        theProps={this.props}
                        diningPage={diningPage} />
            <Footer />
        </>
        )
    }
}
