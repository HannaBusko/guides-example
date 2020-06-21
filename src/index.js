import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { HashRouter, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './index.css';

import HomePage from '../src/pages/index';
import HeaderDividing from './components/Header';
import FooterBlock from './components/Footer';

import {HistoryBlock, RulesBlock,JoinBlock} from '../src/pages/about';

//import Social from './components/Social';
import ScrollToTopBtn from "./components/ScrollToTop";

import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n';


const pageTransitionsDuration = {
  enter: 500,
  exit: 300
};

const RoutesWrapper = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/' render={() => <HomePage />} />
    <Route path='/history' render={() => <HistoryBlock />} />
    <Route path='/rules' render={() => <RulesBlock />} />
    <Route path='/join' render={() => <JoinBlock />} />
    <Redirect to='/' />
  </Switch>
);

class App extends React.Component {

  render() {
    const { location } = this.props;

    const splitPathname = location.pathname.split("/");
    const currentKey = splitPathname[splitPathname.length - 1] || "/";

    return (
      <div>
        <TransitionGroup component="main">
          <CSSTransition
            key={currentKey}
            timeout={pageTransitionsDuration}
            classNames="main-transition"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <RoutesWrapper
              location={location}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const Layout = () => {

  return (
    <Fragment>
      <I18nextProvider i18n={i18n}>
        <HeaderDividing />
        <AppWithRouter />
        <ScrollToTopBtn />
        <FooterBlock />
      </I18nextProvider>
    </Fragment>
  );
}

ReactDOM.render(

  <HashRouter>
    <Layout />
  </HashRouter>
  ,
  document.getElementById("root")
);

serviceWorker.register();
