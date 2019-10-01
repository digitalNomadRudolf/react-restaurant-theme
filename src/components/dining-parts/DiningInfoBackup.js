import React from 'react';

export default function DiningInfo(props) {
    console.log(props)
    const dine = props.theProps.location.pathname === '/diningroom' ? props.diningPage : props.contactPage;
    if(dine === props.diningPage) {
    return (
        <div>
        {dine.map(page => (
        <section id="hero-area-dining" style={{
                background: `url(${page.hero}) no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `center`
        }}>
                    <div class="container">
                        <div class="inner-div">
                            
                        </div>
                    </div>
            </section>
        ))}
        </div>
    ) 
    } else {
        return (
            <div>
                {dine.map(page => (
                    <div>
                    <section id="hero-area-dining" style={{
                    background: `url(${page.header}) no-repeat`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                        <div class="container">
                            <div class="inner-div">
                                
                            </div>
                        </div>
                    </section>
        
        <section class="dining-info">
            <div class="row to-background set-col-height">
            <div class="col-7 dining-info-leftcol">
                <div class="--inner">
                    <h1>{page.diningDescription}</h1>
                    <p>{page.content}</p>
                </div>
            </div>

             
            <div class="col-5 right-bg null-marge" style={{
                 background: `url(${page.contactBg}) no-repeat`,
                 backgroundPosition: `center`
            }}>
                <div class="inner-box reserve-wrap">
                    <div class="reserve-title">
                        <h1>{page.contactTitle}</h1>
                    </div>

                    <div class="contact-fwrap">
                        <form action="/action_page.php" class="contact-form" id="booking" >
                            <label>First name</label>
                            <input type="text" name="firstname" id="fname" placeholder="Your name..." />
                            <label>Last Name</label>
                            <input type="text" name="lastname" id="lname" placeholder="Your last name..." />
                            <label>Email</label>
                            <input type="email" name="email" id="email" placeholder="Your email..." />
                            <label>Message</label>
                            <textarea name="subject" id="subject" placeholder="Your message..."></textarea>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                    

                </div>
            </div>
        </div>
            </section>
            </div>
            ))}
            </div>
            
        
    )
  }
}
