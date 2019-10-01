import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './assets/scss/styles.scss';
import { siteData } from './assets/data';
import axios from 'axios';

import Home from './pages/Home';
import DiningRoom from './pages/DiningRoom';
import DinerMenu from './pages/DinerMenu';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Booked from './components/dining-parts/Booked';


class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    pages: []
  }


  componentDidMount() {
    this.fetchPages();
  }

  fetchPages = () => {
    let tempPages = [];
    siteData.forEach(page => {
      const singlePage = {...page};
      tempPages = [...tempPages, singlePage];

      this.setState(() => {
        return {pages: tempPages}
      })
    })
  }

  render() {

  return (
      <div id="page-wrap" className="page-wrapper">
          <Switch>
            <Route exact path="/" render={(routeProps) => (<Home {...routeProps} pages={this.state.pages} /> )} />
            <Route exact path="/diningroom" render={(routeProps) => (<DiningRoom {...routeProps} pages={this.state.pages} /> )} />
            <Route exact path="/dinermenu" render={(routeProps) => (<DinerMenu {...routeProps} pages={this.state.pages} /> )} />
            <Route exact path="/contact" render={(routeProps) => (<Contact {...routeProps} pages={this.state.pages} /> )} />
            <Route exact path="/booked" render={(routeProps) => (<Booked {...routeProps} pages={this.state.pages} /> )} />
            <Route component={NotFound} />
          </Switch>
      </div>
   );
  }
}

export default App;