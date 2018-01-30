import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

// YOUTUBE API KEY
const API_KEY = 'AIzaSyD4bMDbBJknFVA3XVFwTysAs8jmHZ0fvzY';

// CREATE NEW COMPONENT
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { video: [] };
    // YOUTUBE API SEARCH
    YTSearch({ key: API_KEY, term: 'chris brown' }, (data) => {
      this.setState({ video: data });
    });
  }
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
