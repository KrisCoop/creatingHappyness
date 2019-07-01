import React from 'react';
import './About.css';
import photo1 from './../../k_and_t_wedding_small-_website_720x.jpg';
function About(){
    return(
        <div className="Main">
            <div className="About">
                <h1>Hey there,</h1>
                <h1>I'm Kimmie :)</h1>
                <p>
                    I'm an interior designer who married a contractor (a pretty handsome one right?). 
                </p>

                <p>
                    During a slow Christmas season, I decided to make our family and friends handmade gifts. I was frustrated at not being able to find the "perfect" pieces for their homes. I started borrowing all of my husband's power tools as I experimented with what worked and what didn't. 
                </p>
                    
                <p>
                    I saw my love of “making pretty things” as a hobby, but my entrepreneurial minded hubby saw potential. After some prodding from him (and about 15 different safety lectures... ) I took the plunge and bought my very own tool- a scroll saw! I've been making décor items ever since. Everything you see in my shop was hand cut with love on that little saw! I get so much joy out of creating unique and pretty things!
                </p>
                
                <p>
                    Thanks for being here and allowing me to share a bit about my own personal pursuit of "happyness." It means the absolute world to me!
                </p>
                    
                <p>
                    -Kimmie
                </p>
                <div className="AboutPhoto">
                    <img src={photo1} alt='kimmie and tai' />
                </div>
                
            </div>
        </div>
    )
}

export default About;

