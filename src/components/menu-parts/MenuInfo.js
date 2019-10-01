import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuInfo(props) {
    const menu = props.menuPage;
    return (
        
        <section class="menu-info">
            
           {menu.map(page => ( 
                    <div class="row to-background set-col-height">
                    <div class="col-7 menu-info-leftcol">
                        <div class="--inner">
                        <h1>{page.menuInfoTitle}</h1>
                        <p>{page.par1}</p>
                        <p>{page.par2}</p>
                        {console.log(page.menuFoodItems)}
                        </div>
                        <button class="reserve">
                            <Link to="/diningroom">
                            <span>Reserve</span>
                            </Link>
                        </button>

                    </div>

                    <div class="col-5 the-menu-wrap" style={{
                        background: `url(${page.menuWrapImg}) no-repeat`,
                        backgroundPosition: `left`,
                        backgroundSize: `cover`
                    }}>
                        <div class="inner">
                        <h1 class="menu-title">
                            Menu
                        </h1>
                    <div id="pasteAfter" class="star-separator-big"><i class="fas fa-star-of-life"></i>
                                                    <i class="fas fa-star-of-life"></i>
                                                    <i class="fas fa-star-of-life"></i>                      
                    </div>

                        <div dangerouslySetInnerHTML={{__html: page.menuFoodItems}}></div>

                        </div>
                    </div>
                </div>
                ))}
            </section>
    )
}
