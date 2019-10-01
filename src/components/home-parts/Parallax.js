import React from 'react';

export default function Parallax(props) {
    const { pages } = props; 
    return (
        <div>
        {pages.filter(item => item.id === 'home').map(page => (
        <section class="parallax-quote" style={{
                            background: `linear-gradient(
                                rgba(0,0,0,.9),
                                rgba(0,0,0,.5)
                                ),
                                url(${page.quoteImage})`,
                            backgroundPosition: `center`,
                            backgroundAttachment: `fixed`
        }}>
                <div class="food-bg"></div>
                    <div class="parallax-inner">
                        <h3>{page.quote}</h3>
                    </div>
            </section>
        ))}
        </div>
    )
}
