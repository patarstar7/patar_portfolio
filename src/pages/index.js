import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import About from '../components/About';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Masthead />
      <About />
      <Projects />
      <SocialLinks />
      <Footer />
    </Layout>
  )
};

export default IndexPage;
