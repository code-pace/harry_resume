import React from 'react';

const Footer = () => {
    const getYear = new Date().getFullYear();
    console.log(getYear);
    return (
        <footer>
            <div className="footer-menu">
                <h1 className="footerText">Let's talk.</h1>
                <div className="social">
                    <h1>- Socials</h1>
                    <div className="social-links">
                        <a target="_blank" href="https://github.com/code-pace"><i className="fab fa-github"></i></a>
                        <a target="_blank" href="https://twitter.com/code_pace"><i className="fab fa-twitter"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/chinedu-anyika"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="contacts">
                    <h1>- Contacts</h1>
                    <div>
                        <p>09038127592</p>
                        <p>harrisonanyika@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
