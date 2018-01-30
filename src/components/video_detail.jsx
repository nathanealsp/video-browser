//  WHAT WE NEED FOR THIS COMPONENT IS { IMAGE URL, TITLE , DESCRIPTION}
import React, { Component } from "react";

// SINCE REACT ALWAYS RENDERS COMPONENTS QUICKLY, IM PROVIDING A CHECK TO
// SEE WHETHER WE RECEIVED A VIDEO BEFORE WE RENDER THE REST OF THE COMPONENT

// CLASS BASED COMPONENT /////////////////////////////////////////////////////////////////////////////////////////
class VideoDetail extends Component {
  render() {
    const video = this.props.video;

    if (!video) {
      return <div>Loading......</div>;
    }
    console.log(video);

    const videoId = video.id.videoId;
    const videoTitle = video.snippet.title;
    const videoDescription = video.snippet.description;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div className="media-heading">
            <strong>{videoTitle}</strong>
          </div>
          <div className="media-heading">{videoDescription}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;

// FUNCTION BASED COMPONENT /////////////////////////////////////////////////////////////////////////////////////////

// const VideoDetail = ({ video }) => {
//   if (!video) {
//     return <div>Loading......</div>;
//   }
//   const videoId = video.id.videoId;
//   const videoTitle = video.snippet.title;
//   const videoDescription = video.snippet.description;
//   const url = `https://www.youtube.com/embed/${videoId}`;

//   return (
//     <div className="video-detail col-md-8">
//       <div className="embed-responsive embed-responsive-16by9">
//         <iframe className="embed-responsive-item" src={url} />
//       </div>
//       <div className="details">
//         <div className="media-heading">
//           <strong>{videoTitle}</strong>
//         </div>
//         <div className="">{videoDescription}</div>
//       </div>
//     </div>
//   );
// };

// export default VideoDetail;
