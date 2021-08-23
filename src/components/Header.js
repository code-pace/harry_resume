import React from 'react';

const Header = ({mydata}) => {
        return (
            <nav className="navbar">
                <p>
                    {mydata.map((list) => {
                        const {slackName} = list;
                        return (slackName)
                    })}
                </p>
                <a href="">
                    <img src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png" alt="zuri-internship" className="zuri-logo" />
                </a>
            </nav>
        )
}
export default Header;