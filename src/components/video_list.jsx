import React, { Component } from 'react';
import VideoListItem from './video_list_item';

// CREATE NEW COMPONENT
class VideoList extends Component {
  render() {
    const { videos } = this.props; // DESTRUCTURING IN ES6
    const mappedVideos = videos.map(video => <VideoListItem key={video.etag} video={video} />); // CREATING A LIST OF COMPONENTS
    return (
      <div>
        <ul className="col-md-4 list-group">{mappedVideos} </ul>
        {/* <VideoListItem /> */}
      </div>
    );
  }
}

export default VideoList;
