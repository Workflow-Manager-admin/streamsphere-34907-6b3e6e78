import React from "react";
import VideoCard from "./VideoCard";
import "./VideoRow.css";

// PUBLIC_INTERFACE
function VideoRow({ title, videos }) {
  return (
    <section className="video-row">
      {title && <div className="video-row-title">{title}</div>}
      <div className="video-row-cards">
        {videos.map((v, idx) => (
          <VideoCard key={idx} video={v} />
        ))}
      </div>
    </section>
  );
}

export default VideoRow;
