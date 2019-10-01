import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import DiningInfo from '../components/dining-parts/DiningInfo';
/* import DiningReservation from '../components/dining-parts/DiningReservation'; */
import Footer from '../components/Footer';

export default class Contact extends Component {
    render() {
        
        const { pages } = this.props;
        const contactPage = pages.filter(item => item.id === 'contact');
        return (
        <>
            <Navigation theProps={this.props} />
            <DiningInfo theProps={this.props} 
                        contactPage={contactPage} />
            {/* <DiningReservation 
                            theProps={this.props}
                            contactPage={contactPage} /> */}
            <Footer />
        </>
        )
    }
}
