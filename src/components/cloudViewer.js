import React from 'react';
import _ from 'lodash';
import './cloudViewer.css'
import CloudElement from './cloudElement';

const CloudViewer = ({newsOrgs}) => {
  const cloudElements = _.map(newsOrgs, (orgData) => {
    return <CloudElement key={orgData.key} orgData={orgData} />
  })
  return <div className="cloud-viewer-container">{cloudElements}</div>
}

export default CloudViewer;