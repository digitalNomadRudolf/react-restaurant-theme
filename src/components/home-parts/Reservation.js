import React, { Component } from 'react';
import Datepicker from '../Datepicker';
import { Link } from 'react-router-dom';

export default class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        // pass dining room (reservation page) to booked because i want to use the same page
        // when clicked on the reservation button in homepage, visitor is taken to booked page
        const fromHome = this.props.pages.filter(item => item.id === 'diningRoom');
        console.log(fromHome)
    return (
        <section className="reservation-area">
                <div className="container">
                    <div className="reservation-area__box">
                        <div className="reservation-area__box--inner">
                            <form action="/booked" className="reservation-form" id="booking">
                                <div class="pax-select">
                                    <h2>Number of Guests</h2>
                                    <select name="bookinglist" id="booking" className="form-control">
                                    <option value="2pax">2</option>
                                    <option value="4pax">4</option>
                                    <option value="6pax">6</option>
                                    <option value="8pax">8</option>
                                    </select>
                                <span className="sel-arr"></span>
                                </div>

                                <div className="datepicker-box" name="A">
                                    <h2>Date</h2>
                                    {/* <input class="datepicker form-control" name="A" autocomplete="off" /> */}
                                    
                                    <Datepicker value={Date()} />
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
                                        state: fromHome
                                    }}>
                                <button className="submit-reservation" type="submit">Place Reservation</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    );
  }
}
