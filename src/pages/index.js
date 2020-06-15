import React, { Fragment } from 'react';

import SimpleSlider from '../components/Slider';
import AboutBlock from '../components/About';
import RoutesBlock from '../components/Routes';
import ReasonsBlock from '../components/Reasons';

const img_set = [ 
     {
        url: require('../assets/images/slider/2.jpg'),
    },
    {
        url: require('../assets/images/slider/1.jpg'),
    },
  
    {
        url: require('../assets/images/slider/3.jpg'),
    },
    {
        url: require('../assets/images/slider/4.jpg'),
    },
    {
        url: require('../assets/images/slider/5.jpg'),
    },
    {
        url: require('../assets/images/slider/6.jpg'),
    },
    {
        url: require('../assets/images/slider/7.jpg'),
    },
    {
        url: require('../assets/images/slider/8.jpg'),
    },
];

const HomePage = () => (
    <Fragment>
        <SimpleSlider images={img_set} />
        <AboutBlock />
        <RoutesBlock /> 
         <ReasonsBlock />
    </Fragment>
);


export default HomePage;