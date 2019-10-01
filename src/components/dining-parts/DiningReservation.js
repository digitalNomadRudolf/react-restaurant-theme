import React from 'react';
import Datepicker from '../Datepicker';
import { Link } from 'react-router-dom';

export default function DiningReservation(props) {
    const dine = props.theProps.location.pathname === '/diningroom' ? props.diningPage : props.contactPage;
    const { theProps } = props;
    console.log(props.contactPage)
    return (
        <section className="dining-info">
        {dine.map(page => (
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
                                <form action="/booked" className="reservation-form" id="booking">
                                    <div className="pax-select">
                                        <h2>Number of Guests</h2>
                                        <select name="bookinglist" id="booking" className="form-control">
                                        <option value="2pax">2</option>
                                        <option value="4pax">4</option>
                                        <option value="6pax">6</option>
                                        <option value="8pax">8</option>
                                        </select>
                                    <span className="sel-arr"></span>
                                    </div>
    
                                    <div className="datepicker-box">
                                        <h2>Date</h2>
                                        {/* <input class="datepicker form-control" name="A" autocomplete="off" /> */}
                                        <Datepicker label="Book" value="19/09/2019" />
                                    </div>
                                    
    
                                    <div className="time-select">
                                            <h2>Time</h2>
                                        <select name="bookingtime" id="booking" className="form-control">
                                            <option value="12">12:00</option>
                                            <option value="13">13:00</option>
                                            <option value="14">14:00</option>
                                            <option value="15">15:00</option>
                                            <option value="16">16:00</option>
                                            <option value="17">17:00</option>
                                            <option value="18">18:00</option>
                                            <option value="19">19:00</option>
                                            <option value="20">20:00</option>
                                            <option value="21">21:00</option>
                                            <option value="22">22:00</option>
                                        </select>
                                        <span className="sel-arr"></span>
                                    </div>
                                    
                                    <Link to={{
                                        pathname: "/booked",
                                        state: props.diningPage
                                    }}>
                                    <button className="submit-reservation" type="submit"><span>Book your table</span></button>
                                    </Link>
                                </form>
                            </div>
                            

                        </div>
                    </div>
                </div>
                ))}
            </section>
    )
}
