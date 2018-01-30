import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// CREATE NEW COMPONENT VIDEO LIST, ADDED IDENTIFIER KEY.
class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props; // DESTRUCTURING IN ES6
    const mappedVideos = videos.map(video => (
      <VideoListItem key={video.etag} onVideoSelect={onVideoSelect} video={video} />
    )); // CREATING A LIST OF COMPONENTS
    return (
      <div>
        <ul className="col-md-4 list-group">{mappedVideos} </ul>
      </div>
    );
  }
}

export default VideoList;
