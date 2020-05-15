import React from 'react';
import config from '../../config';
import Scroll from './Scroll';
import Emoji from '../components/Emoji';

export default function SocialLinks() {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container">
        <div className="mx-auto text-center">
          <Scroll type="id" element="masthead">
              <a href="#masthead" className="arrowUp">
                <i className="fas fa-angle-up"></i>
              </a>
          </Scroll>
          <h2 className="text-white my-4">Contact Me</h2>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Home</h4>
                <hr className="my-4" />
                <div className="small text-black-50">{config.address}</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href={`mailto:${config.email}`}>{config.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">Buy me dinner first <Emoji symbol="😉" label="wink"/></div>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <a key={url} href={url} className={`mx-2`}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
