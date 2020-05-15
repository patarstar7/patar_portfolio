import React from 'react';
import { useStaticQuery, graphql } from "gatsby" 
import Img from "gatsby-image" 

const Projects = () => {
    const data = useStaticQuery(graphql`
        {
        allFile(filter: {relativeDirectory: {eq: "assets/images/projects"}}) {
            edges {
            node {
                id
                base
                childImageSharp {
                fluid(maxWidth: 560) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    originalName
                }
                }
                name
            }
            }
        }
        }
    `)
    console.log(data.allFile.edges)
    const projectImages = {};
    data.allFile.edges.forEach(element => {
        projectImages[element.node.name] = element.node.childImageSharp.fluid;
    });
    console.log(projectImages)
    const cs169Project = projectImages['CS169_Project'];
    const cs184Project = projectImages['CS184_Project'];

    return (
        <section id="projects" className="projects-section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="text-black mb-4">Projects</h1>
                </div>
                {/* <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                <div className="col-xl-8 col-lg-7">
                    <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="featured-text text-center text-lg-left">
                    <h4>Shoreline</h4>
                    <p className="text-black-50 mb-0">
                        Grayscale is open source and MIT licensed. This means you can
                        use it for any project - even commercial projects! Download it,
                        customize it, and publish your website!
                    </p>
                    </div>
                </div>
                </div> */}

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6 ">
                        <div className="pictureContainer h-100">
                                <div className="w-100 my-auto">
                                    <Img fluid={cs184Project} alt="Inverse Kinematics Project" />
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Inverse Kinematics</h4>
                                    <p className="text-white-50">
                                        A program that uses inverse kinematics to animate a three-dimensional kinematic arm tracking a moving target
                                    </p>
                                    <p className="text-white-50">
                                        Languages: C++
                                    </p>
                                    <hr className="d-none d-lg-block ml-0" />
                                    <a href="https://github.com/patarstar7/InverseKinematics" className="btn btn-primary btn-right">
                                        Github
                                    </a>
                                    <a href="https://youtu.be/rfVsfdw7alE" className="btn btn-primary btn-right">
                                        Youtube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                <div className="col-lg-6">
                    <div className="pictureContainer h-100">
                            <div className="w-100 my-auto">
                                <Img fluid={cs169Project} alt="FuelED Project" />
                            </div>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-first">
                    <div className="bg-black text-center h-100 project">
                    <div className="d-flex h-100">
                        <div className="project-text w-100 my-auto text-center text-lg-right">
                            <h4 className="text-white">Full Stack Project</h4>
                            <p className="text-white-50">
                                In a group of 6, we worked with a local company, FuelEd Schools, to implement a scheduling system to help
                                facilitate meetings between faculty and students.
                            </p>
                            <p className="text-white-50">
                                Languages: Ruby on Rails
                            </p>
                            <hr className="d-none d-lg-block mr-0" />
                            <a href="https://github.com/FuelEdAdmin/FuelEd" className="btn btn-primary btn-left">
                                Github
                            </a>
                            <a href="https://youtu.be/bUMTFVHZve0" className="btn btn-primary btn-left">
                                Youtube
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  );
}
export default Projects;
