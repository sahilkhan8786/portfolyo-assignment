import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import ContactUs from '../../components/light/contact/ContactUs';
import Nav from '../../components/light/blogs/nav';
import Portfolio from '../../components/light/works/portfolio';
import Footer from '../../components/light/home/footer';
import Lines from '../../components/Common/Lines';
import { UserContext } from '../../context/UserContext';

function LightWorks() {
  const { userData } = useContext(UserContext);

  if (!userData) return <LoadingScreen />
  return (
    <div>
      <Helmet>
        <title>Gavi - Light</title>
        <link rel="icon" href="/light/assets/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/light/assets/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
      </Helmet>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />
      <main className="container">
        <Portfolio data={userData?.projects} />
      </main>
      <Footer />
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default LightWorks;
