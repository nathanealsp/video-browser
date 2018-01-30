import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

// CREATE NEW COMPONENT
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        {/* <VideoDetail /> */}
        {/* <VideoList /> */}
      </div>
    );
  }
}
// PUT COMPONENT INTO THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));
