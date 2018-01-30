import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import _ from "lodash";

// YOUTUBE API KEY
const API_KEY = "AIzaSyD4bMDbBJknFVA3XVFwTysAs8jmHZ0fvzY";

// CREATE NEW COMPONENT
class App extends Component {
  constructor(props) {
    super(props);

    // SETTING INTIAL STATE
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // YOUTUBE API SEARCH
    YTSearch({ key: API_KEY, term: "info graphics show " }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
    this.selectedVideo = this.selectedVideo.bind(this);
  }
  selectedVideo(selected) {
    this.state({ selectedVideo: selected });
  }

  //YOUTUBE SEARCH FUNCTION

  // FROM APP--> VIDEOLIST --> VIDEOLIST ITEM(THIS WILL CHOSE THE VIDEO)

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.selectedVideo}
        />
      </div>
    );
  }
}
// PUT COMPONENT INTO THE DOM
ReactDOM.render(<App />, document.querySelector(".container"));
