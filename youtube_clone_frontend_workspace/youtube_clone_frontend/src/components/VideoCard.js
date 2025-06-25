import React from "react";
import "./VideoCard.css";

function formatViews(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M views";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K views";
  return n + " views";
}

// PUBLIC_INTERFACE
function VideoCard({ video }) {
  return (
    <div className="video-card" tabIndex={0}>
      <div className="thumbnail-wrapper">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
        />
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-card-body">
        <img src={video.channelAvatar} alt="" className="channel-avatar" />
        <div className="video-info">
          <div className="video-title" title={video.title}>
            {video.title}
          </div>
          <div className="video-meta">
            <span className="channel-name">{video.channel}</span>
            <span className="video-views">{formatViews(video.views)}</span>
            <span>•</span>
            <span className="upload-date">{video.uploaded}</span>
          </div>
        </div>
        <span className="video-more">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="#aaa">
            <circle cx="9" cy="3" r="1.5" />
            <circle cx="9" cy="9" r="1.5" />
            <circle cx="9" cy="15" r="1.5" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default VideoCard;
