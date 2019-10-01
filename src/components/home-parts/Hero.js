import React from 'react';
import HeroImage from '../../assets/images/unedited/hero-home.jpg';

export default function Hero(props) {
    console.log(props)
    const { pages } = props;
    // go through the pages array and filter out the item with id of home
    // then map through the filtered page items and display them where necessary
    return (
            <div>
            {pages.filter(item => item.id === 'home').map(page => (
            <section key={page.id} id="hero-area" style={{ background: `radial-gradient(
                                                          rgba(0,0,0,.25),
                                                          rgba(0,0,0,.95)
                                                           ), 
                                                           url(${HeroImage})`,
                                             backgroundPosition: `center center`,
                                             backgroundSize: `cover`

                                           }}>
                
                    <div className="container">
                        <div className="middle-hero-image">
                            <div className="middle-hero-image__title">
                                <h1>{page.heroTitle}</h1>
                                <span className="tagline">{page.heroDescription}</span>
                            </div>
                        </div>
                    </div>
            </section>
            ))}
            </div>
    )
}
