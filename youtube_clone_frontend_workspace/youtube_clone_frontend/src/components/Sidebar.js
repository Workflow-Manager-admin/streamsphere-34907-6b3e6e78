import React from "react";
import "./Sidebar.css";

// svg icon snippets for main nav
const navIcons = {
  Home: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="#fff" d="M12 4l8 6v10.4A1.6 1.6 0 0 1 18.4 22H5.6A1.6 1.6 0 0 1 4 20.4V10l8-6z"/>
    </svg>
  ),
  Explore: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
      <path d="M9 15l2-6 6-2-2 6-6 2z" fill="#fff"/>
    </svg>
  ),
  Shorts: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <rect width="18" height="10" x="1" y="5" rx="5" fill="#fff" />
      <path d="M6 9l3 2.5-3 2.5V9z" fill="#f00"/>
    </svg>
  ),
  Subscriptions: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="12" rx="3" fill="#fff"/>
      <path d="M9 13l5-3v6l-5-3z" fill="#f00"/>
    </svg>
  ),
  Originals: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="#fff">
      <circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="2"/>
      <circle cx="11" cy="11" r="5" fill="#f00"/>
    </svg>
  ),
  Music: (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <circle cx="11" cy="11" r="10" fill="#fff" opacity="0.15"/>
      <path d="M11 16a3 3 0 1 0 0-6c-.83 0-1.5.67-1.5 1.5V12h3v-5h-1v3H9v-5h6v10a5 5 0 0 1-5 5z" fill="#f00"/>
    </svg>
  ),
};

// PUBLIC_INTERFACE
const Sidebar = ({ open }) => {
  return (
    <aside className={`yt-sidebar${open ? "" : " collapsed"}`}>
      <div className="sidebar-section main-nav">
        <SidebarItem icon={navIcons.Home} label="Home" active />
        <SidebarItem icon={navIcons.Explore} label="Explore" />
        <SidebarItem icon={navIcons.Shorts} label="Shorts" />
        <SidebarItem icon={navIcons.Subscriptions} label="Subscriptions" />
        <SidebarItem icon={navIcons.Originals} label="Originals" />
        <SidebarItem icon={navIcons.Music} label="YouTube Music" />
      </div>
      <SidebarDivider />
      <div className="sidebar-section secondary-nav">
        <SidebarItem icon="📚" label="Library" />
        <SidebarItem icon="⏱️" label="History" />
        <SidebarItem icon="⏰" label="Watch Later" />
        <SidebarItem icon="👍" label="Liked Videos" />
      </div>
      <SidebarDivider />
      <div className="sidebar-section sidebar-subs">
        <div className="sidebar-section-title">Subscriptions</div>
        <div className="sidebar-subs-list">
          {dummyChannels.map((ch) => (
            <SidebarChannel key={ch.id} name={ch.name} online={ch.online} />
          ))}
        </div>
      </div>
    </aside>
  );
};

// PUBLIC_INTERFACE
function SidebarItem({ icon, label, active }) {
  return (
    <div className={`sidebar-item${active ? " active" : ""}`}>
      <span className="sidebar-icon">{typeof icon === "string" ? icon : icon}</span>
      <span className="sidebar-label">{label}</span>
    </div>
  );
}

// PUBLIC_INTERFACE
function SidebarDivider() {
  return <div className="sidebar-divider" />;
}

function SidebarChannel({ name, online }) {
  return (
    <div className="sidebar-channel">
      <span className={`channel-avatar${online ? " online" : ""}`}></span>
      <span className="channel-name">{name}</span>
    </div>
  );
}

const dummyChannels = [
  { id: 1, name: "Lo-fi Girl", online: true },
  { id: 2, name: "Marques Brownlee", online: false },
  { id: 3, name: "CrashCourse", online: false },
  { id: 4, name: "NASA", online: false },
  { id: 5, name: "The PrimeTime", online: false },
  { id: 6, name: "Live Coding", online: false }
];

export default Sidebar;
