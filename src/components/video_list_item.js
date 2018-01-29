import React, { Component } from 'react';
import VideoDetail from './components/video_detail';

class VideoListItem extends Component {
  render() {
    return (
      <div>
        <h1>VideoListItem</h1>
        <VideoDetail />
      </div>
    );
  }
}

export default VideoListItem;
