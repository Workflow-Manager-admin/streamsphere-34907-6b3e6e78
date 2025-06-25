import React from "react";
import ShortsRow from "../components/ShortsRow";
import VideoRow from "../components/VideoRow";
import "./HomePage.css";

const videos1 = [
  {
    thumbnail: "https://i3.ytimg.com/vi/abc123/maxresdefault.jpg",
    duration: "12:34",
    title: "The Future of JavaScript Frameworks Explained!",
    channel: "JS Talks",
    channelAvatar: "https://randomuser.me/api/portraits/men/24.jpg",
    views: 913000,
    uploaded: "2 days ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/def456/maxresdefault.jpg",
    duration: "9:21",
    title: "How NASA Lands Rovers on Mars",
    channel: "NASA",
    channelAvatar: "https://randomuser.me/api/portraits/women/45.jpg",
    views: 3200000,
    uploaded: "3 weeks ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/jkl789/maxresdefault.jpg",
    duration: "15:09",
    title: "Web Design in 2024: UI/UX Trends",
    channel: "Design Course",
    channelAvatar: "https://randomuser.me/api/portraits/men/43.jpg",
    views: 85000,
    uploaded: "5 hours ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/ghi789/maxresdefault.jpg",
    duration: "8:11",
    title: "Lo-fi for Coding – Best Playlists",
    channel: "Lo-fi Girl",
    channelAvatar: "https://randomuser.me/api/portraits/women/32.jpg",
    views: 152000,
    uploaded: "1 week ago"
  }
];

const videos2 = [
  {
    thumbnail: "https://i3.ytimg.com/vi/xyz543/maxresdefault.jpg",
    duration: "22:44",
    title: "React Performance: All You Need to Know",
    channel: "React Power",
    channelAvatar: "https://randomuser.me/api/portraits/men/66.jpg",
    views: 64000,
    uploaded: "7 hours ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/vbn456/maxresdefault.jpg",
    duration: "10:10",
    title: "Crash Course: Artificial Intelligence",
    channel: "CrashCourse",
    channelAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    views: 210000,
    uploaded: "4 days ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/qwe678/maxresdefault.jpg",
    duration: "13:47",
    title: "Daily Standup Live – Best Practices",
    channel: "Live Coding",
    channelAvatar: "https://randomuser.me/api/portraits/women/54.jpg",
    views: 7800,
    uploaded: "2 hours ago"
  },
  {
    thumbnail: "https://i3.ytimg.com/vi/poi876/maxresdefault.jpg",
    duration: "25:01",
    title: "10 YouTube Tips for Beginners",
    channel: "MKBHD",
    channelAvatar: "https://randomuser.me/api/portraits/men/83.jpg",
    views: 1778900,
    uploaded: "3 months ago"
  }
];

const shortsList = [
  {
    id: "s1",
    thumbnail: "https://i3.ytimg.com/vi/short1/hqdefault.jpg",
    title: "Quick Dev Tricks for 2024",
    views: "1.2M"
  },
  {
    id: "s2",
    thumbnail: "https://i3.ytimg.com/vi/short2/hqdefault.jpg",
    title: "The Coding Ritual",
    views: "487K"
  },
  {
    id: "s3",
    thumbnail: "https://i3.ytimg.com/vi/short3/hqdefault.jpg",
    title: "Why Our Networks Break",
    views: "88K"
  },
  {
    id: "s4",
    thumbnail: "https://i3.ytimg.com/vi/short4/hqdefault.jpg",
    title: "AI Predicts My Day",
    views: "55K"
  }
];

// PUBLIC_INTERFACE
function HomePage() {
  return (
    <div className="home-page">
      <VideoRow title="Recommended" videos={videos1} />
      <ShortsRow shorts={shortsList} />
      <VideoRow title="Trending Videos" videos={videos2} />
    </div>
  );
}

export default HomePage;
