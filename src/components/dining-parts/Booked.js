import React from 'react';
import Navigation from '../Navigation';


export default function Booked(props) {
    const diningPage = Array.from(props.location.state);
    const dine = props.location.pathname === '/booked' ? diningPage : '';
    console.log(props)
    return (
       <>
        <Navigation />
        {dine.map(page => (
                <div key={page.id}>
                    
                    <section key={page.id} id="hero-area-dining" style={{
                    background: `url(${page.hero}) no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                        <div className="container">
                            <div className="inner-div">
                                
                            </div>
                        </div>
                    </section>
        <section className="dining-info">
        
                <div key={page.id}>
                    <div className="row to-background set-col-height">
                    <div className="col-7 dining-info-leftcol">
                        <div className="--inner">
                            <h1>{page.diningDescription}</h1>
                            <p>{page.par1}</p>
                            <p>{page.par2}</p>
                        </div>
                    </div>

                     
                    <div className="col-5 right-bg null-marge" style={{
                         background: `url(${page.reserveBg}) no-repeat`,
                         backgroundPosition: `center`
                    }}>
                        <div className="inner-box reserve-wrap">
                            <div className="reserve-title">
                                <h1>{page.reserveTitle}</h1>
                            </div>

                            <div className="reservation-fwrap">
                                <h3 style={{ fontWeight: 600 }}>Thank you for booking a table...</h3>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    ))}
    </>
    )
}
