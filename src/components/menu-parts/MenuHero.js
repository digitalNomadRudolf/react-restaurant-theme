import React from 'react';

export default function MenuHero(props) {
    const menu = props.menuPage;
    return (
        <div>
        {menu.map(page => (
        <section id="hero-area-menu" style={{
                background: `url(${page.hero}) no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `center`
        }}>
                    <div class="container">
                        <div class="inner-div">
                            <div class="primary-message">
                                <h1>{page.heroDescription}</h1>
                                <span class="tagline">{page.secondDescr}</span>
                            </div>
                        </div>
                    </div>
            </section>
            ))}
        </div>
    )
}
