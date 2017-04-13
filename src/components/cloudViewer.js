import React from 'react';
import _ from 'lodash';

import CloudElement from './cloudElement';

const CloudViewer = ({newsOrgs, width, height}) => {
  const cloudElements = _.map(newsOrgs, (orgData) => {
    return <CloudElement 
            width={width} 
            height={height}
            key={orgData.key} orgData={orgData} />
  })
  return <div className="cloud-viewer-container">{cloudElements}</div>
}

export default CloudViewer;