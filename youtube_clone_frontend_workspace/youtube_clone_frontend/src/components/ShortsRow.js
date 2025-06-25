import React from "react";
import "./ShortsRow.css";

// PUBLIC_INTERFACE
function ShortsRow({ shorts }) {
  return (
    <div className="shorts-row">
      <div className="shorts-title">
        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_shorts_icon.svg" height={28} style={{ marginRight: 8, verticalAlign: "middle" }} />
        Shorts
      </div>
      <div className="shorts-items">
        {shorts.map((short) => (
          <div key={short.id} className="shorts-card">
            <img src={short.thumbnail} alt={short.title} className="shorts-thumb" />
            <div className="shorts-title-meta" title={short.title}>{short.title}</div>
            <div className="shorts-meta">{short.views} views</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortsRow;
