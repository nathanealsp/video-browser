import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// CREATE NEW COMPONENT
class VideoList extends React.Component {
  render() {
    return (
      <div>
        <h1>VideoList</h1>
        <VideoListItem />
      </div>
    );
  }
}

export default VideoList;
