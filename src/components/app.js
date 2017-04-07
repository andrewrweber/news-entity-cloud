import React, {Component} from 'react';
import axios from 'axios';
import './app.css';

import CloudViewer from './cloudViewer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsOrgs: null
    }
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
  render() {
    console.log(this); 
    return (
      <div>
        {this.state.newsOrgs ? 
          <CloudViewer newsOrgs={this.state.newsOrgs}/> :
          <div>Loading</div>
        }
      </div>
    );
  }
}
