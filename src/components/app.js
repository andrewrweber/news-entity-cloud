import React, {Component} from 'react';
import axios from 'axios';
import './app.css';

import CloudViewer from './cloudViewer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsOrgs: null,
      width: '0',
      height: '0'
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }
  componentWillMount() {
    axios.get('https://entities-in-the-news-api.appspot.com/entities')
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        {this.state.newsOrgs ? 
          <CloudViewer 
            width={this.state.width} 
            height={this.props.height} 
            newsOrgs={this.state.newsOrgs}
          /> :
          <div>Loading</div>
        }
      </div>
    );
  }
}
