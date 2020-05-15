import React from 'react';
import Emoji from '../components/Emoji';
import { useStaticQuery, graphql } from "gatsby" 
import Img from "gatsby-image" 

const About = () => {
    const data = useStaticQuery(graphql`
        {
        file(relativePath: {eq: "assets/images/profilePic.jpg"}) {
            childImageSharp {
            fluid(maxWidth: 525, maxHeight: 700) {
                base64
                aspectRatio
                src
                srcSet
                sizes
            }
            }
        }
        }
    `)

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <div className="row justify-content-center">
                            <div className="about-me-header-container">
                                <h1 className="text-white mb-4">About Me</h1>
                            </div>
                        </div>
                        <div className="row about-me-container">
                            <div className="col-lg-6 about-me-col">
                                <Img fluid={data.file.childImageSharp.fluid} alt="Patrick and Nomnoms Profile Picture" />
                            </div>
                            <div className="col-lg-6 about-me-col">
                            <h2>Who am I?</h2>
                            <p>
                                Hello there! My name is Ernest Patrick Trillo, but you can call me Patrick :3
                                I am a Full Stack Developer that enjoys designing and building beautiful applications 
                                to help make users' lives a little bit better.  I particularly
                                enjoy working on the front end as I can directly see the impact of my work on the screen, 
                                but I am experienced working in the back end as well. In the beginning of my 
                                career I also specialized in quality assurance and automation.  
                            </p>
                            <h2>What am I doing now?</h2>
                            <p>
                                Unfortunately due to COVID-19 <Emoji symbol="🦠" label="virus"/>, I have recently lost my job and
                                I am on the lookout for opportunities in the SF Bay Area or remote positions
                                so please feel free to reach out if you have any leads!
                                As of now, I am learning new skills and working on side projects that I've always 
                                been meaning to get going.
                                
                            </p>
                            <h2>In my free time, you can find me...</h2>
                                {/* <p> */}
                                    <ul>
                                        <li><Emoji symbol="🐶" label="dog"/> Walking my dog <a href="https://www.instagram.com/nomnoms_the_pug/">Nomnoms :3</a></li>
                                        <li><Emoji symbol="🏃‍♂️" label="running"/> Running long distances</li>
                                        <li><Emoji symbol="🤤" label="drooling"/> Eating ALL of the <a href="https://www.instagram.com/angsarapnaman/">food</a>  </li>
                                        <li><Emoji symbol="✈️" label="airplane"/> Traveling the world or to LA</li>
                                        <li><Emoji symbol="🕺" label="dancing"/> Dancing at music festivals</li>
                                        <li><Emoji symbol="💇‍♂️" label="haircut"/> Dyeing my hair a different color</li>
                                    </ul>
                                {/* </p> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="about-me-header-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
export default About;

// export const query = graphql`
//   {
//     file(relativePath: {eq: "assets/images/profilePic.jpg"}) {
//       id
//       name
//       childImageSharp {
//         fluid {
//           aspectRatio
//           base64
//           src
//           sizes
//           srcSet
//         }
//       }
//     }
//   }
// `