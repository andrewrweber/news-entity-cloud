import React from 'react';

const NewsOptions = ({setOrgFilter}) => {
  const handleChange = ({target}) => {
    setOrgFilter(target.value);
  }
  return (
    <select onChange={handleChange} className="news-option-select">
      <option value="foxNews">Fox News</option>
      <option value="cnn">CNN</option>
      <option value="abc">ABC</option>
    </select>
  );
}


const TopNav = ({setOrgFilter}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="title">What's popular in </div>
        <NewsOptions setOrgFilter={setOrgFilter}/>
      </div>
    </nav>
  );

}

export default TopNav;