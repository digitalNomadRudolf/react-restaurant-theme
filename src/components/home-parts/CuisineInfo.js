import React from 'react';
import { Link } from 'react-router-dom';

export default function CuisineInfo(props) {
    const { pages } = props;
    return (
        <section class="cuisine">
            {pages.filter(item => item.id === 'home').map(page => (
                <div class="container">
                    <div class="row to-background">
                    <div class="col-6 cuisine-info repos-left">
                        <div class="cuisine-info__inner">
                        <h1>{page.contentTitle}</h1>
                        <p>{page.par1}</p>
                        <p>{page.par2}</p>
                        
                        <button class="btn-cuisine">
                            <Link to="/dinermenu">
                            <span>Menu</span>
                            </Link>
                        </button>
                        </div>
                    </div>

                    <div class="col-6 cuisine-info repos-right" style={{ 
                                background: `linear-gradient(
                                            rgba(250,250,250,.3),
                                            rgba(250,250,250,.3)
                                            ),
                                            url(${page.backgroundRight}) no-repeat`,
                                            backgroundPosition: `center`,
                                            backgroundSize: `cover`
                     }}>
                    </div>
                </div>
                </div>
            ))}
            </section>
    )
}
