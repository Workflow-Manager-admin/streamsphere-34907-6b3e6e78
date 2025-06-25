# YouTube Homepage Redesign – UI Design Notes

This document serves as a comprehensive design specification, color/style guide, and layout breakdown for implementing the YouTube Clone frontend using the attached reference.

---

## 1. Overall Layout

- **Structure:**
  - **Sidebar (Vertical, Left):** Persistent vertical nav on the left; collapsible/hideable.
  - **Header (Top Bar):** Full-width, sticky/fixed top navigation.
  - **Main Content:**
    - **Horizontal sections:** Rows of video thumbnails/playlists (2 main rows), and a "Shorts" feature area.
    - **Rows use horizontal scrolling for overflow in "Shorts".**
  - **Background:** Dark theme throughout—off-black/charcoal base.

**CSS Layout Approach:**  
- Header (Top): `position: fixed; width: 100%; z-index: high`
- Sidebar: `flex: 0 0 250px; min-width: 200px; background: #181818; height: 100vh;`
- Main Content: `flex: 1 1 auto; margin-left: 250px; padding-top: headerHeight;`
- Use Flexbox for main horizontal arrangement, CSS Grid/Flex for rows.

---

## 2. Key Page Components

### Header (Top Navigation)
- **Left:**
  - Hamburger menu icon (for toggling sidebar)
  - YouTube logo (left-aligned)
- **Center:**
  - Search input field (rounded, prominent, with search icon)
  - Microphone icon (voice search)
- **Right:**
  - Add video/upload icon, Apps icon, Notifications icon (badges), User avatar dropdown

### Sidebar (Vertical Nav)
- **Primary navigation (Icons & labels):**
  - Home, Explore, Shorts, Subscriptions, Originals, YouTube Music
- **Secondary navigation/quick links:**
  - Library, History, Watch later, Liked videos, More from YouTube, etc.
- **Divider lines between major sections**
- **Subscribed channels (scrollable list, small avatars)**

### Main Content Area

#### Video Rows
- **Each row:**
  - Section title (optional or inferred from content)
  - Horizontal grid of video cards.
- **Video Card:**
  - Thumbnail (16:9 ratio)
  - Video length badge (bottom right on thumbnail)
  - Channel avatar, Title (multi-line, ellipsis), Channel name, Views, Upload date
  - More menu icon (vertical ellipsis)
- **Hover**: Slight shadow, lift, clickable

#### Shorts Row
- **Horizontal scroll of vertical video cards ("Shorts")**
  - Cover image (9:16)
  - Title, views below video
  - Rounded corners/videos slightly elevated

---

## 3. Colors

> All variables in CSS custom property format.

- `--bg-canvas`: #0f0f0f (main page background)
- `--header-bg`: #181818 (header/sidebar background)
- `--sidebar-bg`: #181818 (sidebar background)
- `--primary-text`: #ffffff (main text)
- `--secondary-text`: #aaaaaa (secondary/metadata)
- `--accent-red`: #ff0000 (YouTube red, highlights and logo)
- `--card-bg`: #181818 (video card background, rounded)
- `--chip-bg`: #272727 (Search/section chips background)
- `--shorts-bg`: #181818 (shorts container bg)
- `--button-bg`: #222222 (button backgrounds, subtle borders)
- `--border-color`: #303030 (dividers, input borders)
- `--avatar-bg`: #333333 (default avatar bg)

---

## 4. Typography

- **Body font:** `"Roboto", "Helvetica Neue", Arial, sans-serif"`
- **Font weights:**
  - Bold for titles (`font-weight: 500-700`)
  - Medium (500) for navigation and section labels
  - Regular (400) for body, video metadata
- **Font sizes:**
  - Video Title: 1rem – 1.125rem (16-18px)
  - Metadata: 0.85rem (13-14px)
  - Sidebar labels: 1rem (16px)
  - Header: 1.125rem (18px)
  - Section titles: 1.15rem (18px), Bold or semibold

- **Line height:** 1.4 for most text, tighter for nav/buttons

---

## 5. Spacing & Sizing

- **Header height:** 56px
- **Sidebar width:** 240px
- **Main content max-width:** 1600px (centered with `margin: auto`)
- **Video card gap:** 16–20px
- **Row vertical gap:** 32px
- **Padding (main area):** 24–32px on left/right of main area

- **Thumbnail size:** 
  - Standard video: ~320x180px (16:9)
  - Shorts: ~160x284px (9:16)

- **Sidebar item padding:** 12px vertical, 24px horizontal
- **Card border-radius:** 12px
- **Input/button border-radius:** 20–25px (pill/rounded effect)

---

## 6. Navigation & Interactivity

- **Sidebar:**
  - Active/selected state uses white or accent-red highlight
  - Hover state: background shade up, subtle effect
- **Header:**
  - Search input expands on focus
  - Icons have hover backgrounds (subtle darken)
- **Video Cards:**
  - Hover: mild shadow and scale up animation
- **Shorts:**
  - Horizontal scroll bar (auto)
- **Buttons and icons:**
  - All icons inherit `--primary-text`, with hover `--accent-red` or lighten

---

## 7. Images & Icons

- **All icons are SVG or outline style**
- **Avatars:** Circle, 36px–40px diameter
- **Thumbnails:** Maintain aspect ratio, have duration badge/overlay
- **Badges (Video duration, Notification):** Rounded, bold font, dark overlay with white text
- **More menu (⋮) and overflow** via vertical ellipsis, right-aligned

---

## 8. Responsiveness

- **Large screens:** Sidebar always visible, main content centered
- **Medium screens:** Sidebar collapses to icons, main content fills
- **Small/mobile:** Sidebar hidden, header condenses, video grid becomes vertical stack, shorts become swipe-scrollable

- **Breakpoints:**
  - `>1200px`: Full layout
  - `900-1199px`: Compact sidebar, reduced paddings
  - `<900px`: Hide sidebar, stack everything

---

## 9. UI Inspiration & Takeaways

- **Focus:** Content first (thumbnails), minimal clutter, prominent search/nav
- **Hierarchy:** Strong visual separation via spacing, background shades, and carding
- **Dark theme:** Primary, with accent red for action and highlights
- **Modern iconography and pill-shaped buttons**

---

## 10. Sample CSS Root Variables

```css
:root {
  --bg-canvas: #0f0f0f;
  --header-bg: #181818;
  --sidebar-bg: #181818;
  --primary-text: #fff;
  --secondary-text: #aaa;
  --accent-red: #ff0000;
  --card-bg: #181818;
  --chip-bg: #272727;
  --button-bg: #222;
  --border-color: #303030;
  --avatar-bg: #333;
}
```

---

**End of design notes. Use this as the source-of-truth for implementing the homepage and as a style foundation for the rest of your YouTube Clone project.**
