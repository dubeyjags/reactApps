import React from "react";
// import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const { snippet, statistics, contentDetails } = video;

  const thumbnail =
    snippet.thumbnails.maxres?.url ||
    snippet.thumbnails.high?.url ||
    snippet.thumbnails.medium?.url;

  const formatDuration = (iso) => {
    const match = iso.match(/PT(\d+M)?(\d+S)?/);
    const minutes = match[1] ? match[1].replace("M", "") : "0";
    const seconds = match[2] ? match[2].replace("S", "") : "00";
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="cards">
      <div className="thumbnail-wrapper">
        <img src={thumbnail} alt={snippet.title} />
        <span className="duration">
          {formatDuration(contentDetails.duration)}
        </span>
      </div>

      <div className="video-content">
        <h3 className="title">{snippet.title}</h3>
        <p className="channel">{snippet.channelTitle}</p>

        <div className="stats">
          <span>{Number(statistics.viewCount).toLocaleString()} views</span>
          <span>{Number(statistics.likeCount).toLocaleString()} likes</span>
        </div>

        <div className="tags">
          {snippet.tags?.slice(0, 3).map((tag, i) => (
            <span key={i} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;