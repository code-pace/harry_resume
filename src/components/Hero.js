import React from 'react';


const Hero = ({mydata}) => {
    return (
        <section className="hero">
            {mydata.map((data, key) => {
                const {lastName, dev, myProfile} = data;
                return (
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>
                                Hi, <br/>
                                I'm {lastName}, a {dev}
                            </h1>
                            <button className="btn">
                                <a href="mailto:harrisonanyika@gmail.com">Email me</a>
                            </button>
                        </div>
                        <div className="hero-img">
                            <img src={`${myProfile}`} alt="harrison" className="myavatar" />
                        </div>
                    </div>
                )
            })}
            
        </section>
    )
}
export default Hero