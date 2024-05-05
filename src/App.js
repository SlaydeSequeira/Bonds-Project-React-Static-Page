import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="nav-bar-title">SimplyBond</div>
        <div className="nav-bar-sub-title">Welcome</div>
        <ul>
          <li>Domain Concepts</li>
          <li>Market Infrastructure</li>
          <li>News Room</li>
          <li>Miscellaneous</li>
        </ul>
      </div>
      <div className="main-content">
        <div>
        <div className="tabs">
          <button>Visit Website</button>
          <button>Blog</button>
          <button>Contacts</button>
        </div>
        <hr/>
        <h4 style={{ fontWeight: 200 }}>Home/Knowledge Base</h4>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget felis ac felis tincidunt dictum. Aenean at ultrices eros. Sed viverra lorem vel urna facilisis fermentum. Quisque efficitur tristique nisi at convallis. Nulla consequat metus vel ex fermentum, vel tristique mauris tincidunt. Maecenas vitae ligula sit amet neque malesuada facilisis. Integer at odio sed turpis bibendum volutpat. Vestibulum ultricies risus ut libero volutpat, et cursus felis convallis. Sed varius luctus gravida. Aliquam erat volutpat.</p>
        </div>
         
        <div className="card-container">
          <div className="card">
            <p className="card-title">Domain Concepts</p>
            <p className="description">A short Description Goes Here</p>
            <p className="article-count">6 Articles<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</p>
          </div>
          <div className="card">
            <p className="card-title">Domain Concepts</p>
            <p className="description">A short Description Goes Here</p>
            <p className="article-count">6 Articles<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</p>
          </div>
          <div className="card">
            <p className="card-title">Domain Concepts</p>
            <p className="description">A short Description Goes Here</p>
            <p className="article-count">6 Articles<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</p>
          </div>
          <div className="card">
            <p className="card-title">Domain Concepts</p>
            <p className="description">A short Description Goes Here</p>
            <p className="article-count">6 Articles<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
</p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>    </div>
  );
}



export default App;
