import React from 'react';
import Scroll from '../components/Scroll';
import config from '../../config';

const Masthead = () => {
    return (
        <header id="masthead" className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">
                        {config.subHeading}
                    </h2>
                    <Scroll type="id" element="about">
                        <a href="#about" className="arrowDown">
                            <i className="fas fa-angle-down mx-auto mt-5 mb-5"></i>
                        </a>
                    </Scroll>
                </div>
            </div>
        </header>
  );
}
export default Masthead;
