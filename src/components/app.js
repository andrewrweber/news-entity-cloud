import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import '../scss/main.scss';

import TopNav from './topNav';
import Footer from './footer';
import CloudViewer from './cloudViewer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsOrgs: null,
      width: '0',
      height: '0',
      newsOrgFilter: "foxNews"
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateWindowDimensions = _.debounce(this.updateWindowDimensions, 250);

  }
  componentWillMount() {
    axios.get('https://api-dot-entities-in-the-news-api.appspot.com/entities')
      .then((response) => {
        this.setState({
          newsOrgs: response.data
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth - (window.innerWidth * .1), 
      height: window.innerHeight - (window.innerHeight * .2)
    });
  }

  filterNewsOrgs (orgs, filter) {
    return _.filter(orgs, (org) => {
      return org.key === filter
    });
  }

  setFilter(filter) {
    this.setState({newsOrgFilter: filter});
  }
  
  render() {
    return (
      <div>
        <TopNav setOrgFilter={this.setFilter.bind(this)}/>
        <div className="app-container">
        {this.state.newsOrgs ? 
          <CloudViewer 
            width={this.state.width} 
            height={this.state.height} 
            newsOrgs={this.filterNewsOrgs(this.state.newsOrgs, this.state.newsOrgFilter)}
          /> :
          <div>Loading</div>
        }
        </div>
        <Footer />
      </div>
    );
  }
}
