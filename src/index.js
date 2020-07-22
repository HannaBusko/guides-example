import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

import Preloader from "./components/Preloader";

import './index.css';

const Layout = React.lazy(() => import('./components/Layout'));

ReactDOM.render(

  <HashRouter>
    <Suspense fallback={<Preloader />}>
      <Layout />
    </Suspense>
  </HashRouter>
  ,
  document.getElementById("root")
);

serviceWorker.register();
