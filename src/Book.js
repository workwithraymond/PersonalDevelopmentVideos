import React from 'react';
import YouTube from 'react-youtube';

const Book = ({author, title, videoUrl, number}) => {
    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
    };
    return (
        <article className="book">
        <div className="video-container">
          <YouTube videoId={getYouTubeVideoId(videoUrl)} opts={opts} />
        </div>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">{`#${number + 1}`}</span>
      </article>
      );
};

const getYouTubeVideoId = (url) => {
    const videoIdRegex = /[?&]v=([^?&]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : '';
  };

export default Book;