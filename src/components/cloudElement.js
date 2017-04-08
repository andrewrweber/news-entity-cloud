import React from 'react';
import WordCloud from 'react-d3-cloud';

import './cloudElement.css';

const CloudElement = ({orgData, width, height}) => {

  console.log(width, height);
  const fontScale = 120;
  let maxValue = 0;
  let minValue = 100;
  
  const cloudData = _.map(orgData.data, (data) => {
    if(data.count < minValue){ minValue = data.count };
    if(data.count > maxValue) { maxValue = data.count };
    return {text: data._id, value: data.count};
  });

  const normalizeValue = (value) =>  (value - minValue) / (maxValue - minValue);

  const fontSizeMapper = (word) => {
    const normalizedValue = normalizeValue(word.value);
    return normalizedValue * fontScale;
  };

  return (
    <div className="word-cloud">
      <WordCloud 
        data={cloudData} 
        fontSizeMapper={fontSizeMapper}
        width={width}
        height={height}
      />
    </div>
  );
}

export default CloudElement;