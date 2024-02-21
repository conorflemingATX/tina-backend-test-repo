import React from 'react'

import '../styles/css/bootstrap.min.css'
import 'animate.css'
import "../styles/css/boxicons.min.css"
import "../styles/css/flaticon.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import "/node_modules/aos/dist/aos.css"
import "swiper/css"
import "swiper/css/bundle"
import "../styles/css/slick.css"

// Global style
import "../styles/css/style.css" 
import "../styles/css/responsive.css" 

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
