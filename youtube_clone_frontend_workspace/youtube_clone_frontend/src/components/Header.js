import React from "react";
import "./Header.css";
import youtubeLogo from "../assets/youtube_logo.svg";

// svg icons inline for simplicity
const HamburgerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect y="6" width="28" height="2.4" rx="1.2" fill="#fff"/>
    <rect y="13" width="28" height="2.4" rx="1.2" fill="#fff"/>
    <rect y="20" width="28" height="2.4" rx="1.2" fill="#fff"/>
  </svg>
);

const SearchIcon = () => (
  <svg height="24" width="24" fill="#aaa" viewBox="0 0 24 24"><path d="M21 20.3l-5.77-5.77A7.94 7.94 0 0 0 17 9a8 8 0 1 0-8 8c1.72 0 3.3-.55 4.53-1.47L20.3 21zM9 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
);

const MicIcon = () => (
  <svg height="24" width="24" fill="#fff" viewBox="0 0 24 24"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0h-2a7 7 0 0 0 14 0h-2zm-5 7v2h4v2h-8v-2h4v-2z"/></svg>
);

const UploadIcon = () => (
  <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M15.41 16.59L13 19.17V10h-2v9.17l-2.41-2.58L7 18l5 5 5-5z"/><path d="M19 4H5v2h14V4z"/></svg>
);

const AppsIcon = () => (
  <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><circle cx="5" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></svg>
);

const BellIcon = () => (
  <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v0.68C7.13 5.36 5.5 7.92 5.5 11v5l-1.7 1.7a.996.996 0 0 0-.29.71c0 .39.31.7.7.7h15.58c.39 0 .7-.31.7-.7 0-.28-.11-.53-.29-.71L18 16z"/></svg>
);

const UserAvatar = () => (
  <div className="header-avatar" tabIndex={0}>
    <svg width="32" height="32" fill="#fff" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#333"/>
      <circle cx="16" cy="13" r="6" fill="#555"/>
      <ellipse cx="16" cy="25" rx="9" ry="5" fill="#555"/>
    </svg>
  </div>
);

// PUBLIC_INTERFACE
const Header = ({ onMenuClick }) => {
  return (
    <header className="yt-header">
      <div className="yt-header-left">
        <button className="menu-btn" aria-label="Toggle sidebar" onClick={onMenuClick}>
          <HamburgerIcon />
        </button>
        <img src={youtubeLogo} alt="YouTube Logo" className="yt-logo" />
      </div>
      <div className="yt-header-center">
        <form className="header-search" role="search" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <SearchIcon />
          </button>
        </form>
        <button className="mic-btn" aria-label="Voice search">
          <MicIcon />
        </button>
      </div>
      <div className="yt-header-right">
        <button className="icon-btn" aria-label="Upload video">
          <UploadIcon />
        </button>
        <button className="icon-btn" aria-label="YouTube apps">
          <AppsIcon />
        </button>
        <button className="icon-btn notification-btn" aria-label="Notifications">
          <BellIcon />
          <span className="notification-badge">3</span>
        </button>
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
