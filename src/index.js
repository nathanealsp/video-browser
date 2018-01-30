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

    // SETTING INTIAL STATE
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    // YOUTUBE API SEARCH
    this.videoSearch('Vine king bach');
  }

  // YOUTUBE SEARCH FUNCTION

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  // FROM APP--> VIDEOLIST --> VIDEOLIST ITEM(THIS WILL CHOSE THE VIDEO)

  render() {
    // THROTTLING THE SEARCH
    const videoSearch = _.debounce((searchTerm) => {
      this.videoSearch(searchTerm);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}
// PUT COMPONENT INTO THE DOM
ReactDOM.render(<App />, document.querySelector('.container'));
