import React from 'react'
import './Footer.scss'

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className="footer-background">
            <div className="footer">
                <div className="col">
                    <p className="text">
                        Address: Ninh Kieu, Can Tho city.
                    </p>
                    <p className="text">
                        Phone: 0939305459.
                    </p>
                    <p className="text">
                        Fax:
                    </p>
                    <p className="text">
                        Developed by Dinh Phuc Khang.
                    </p>
                    <p className="text">
                        Website: http://hippomovies.com/
                    </p>
                </div>
                <div className="col">
                    <div className="social-icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer