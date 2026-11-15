# 🎀 Happy 18th Birthday, Nitisha Mohanty! 🎀
### *A Dreamy Interactive Birthday Surprise Website Created by Swayansh Prusty*

Welcome to the official repository for **Nitisha Mohanty's 18th Birthday Website**! This website is crafted with a cute, dreamy, pastel aesthetic (baby pink, soft pastel blush, light lavender, peach accents, and warm glowing highlights). It is designed to feel like a blend of an interactive digital scrapbook, an emotional story, and a grand birthday celebration.

---

## 🌟 Key Features & Sections

### 1. 🎁 Welcome Screen (3D Gift Box Landing)
- **Full-Screen Hero:** Displays *"Hey Nitisha! 🎀"* and *"Someone has prepared a little something special just for you..."*.
- **Interactive 3D Gift Box:** Features a bouncing ribbon bow, sparkle particles, and an unwrapping lid animation.
- **Surprise Button:** *"Open Your Surprise 💗"* triggers an explosion of confetti, floats hearts, initializes the music soundtrack, and smoothly transitions into the scrapbook journey.
- **Credit Footer:** *"Made with love by Swayansh Prusty."*

### 2. 📸 Scrapbook Photo Gallery
- **Category Tabs:** Filter photos by "All Photos 📸", "Sweet Smiles 🌸", "Fun & Chaos 🤪", and "Milestones 🎀".
- **Polaroid Aesthetic:** Organic tilts, washi tape corners, cute stickers, and soft pink borders.
- **Handwritten Captions:** Charming titles, captions, and date tags below each photo.
- **Interactive Lightbox:** Clicking any photo opens a full-screen slideshow with Next/Previous navigation, keyboard support (`Esc`, `←`, `→`), and photo counter.
- **Graceful Fallbacks:** If an image fails to load or is being replaced, a cute pastel placeholder is displayed automatically.

### 2B. 🎬 Dedicated Video Clips Section
- **Pastel Cinema Cards:** Dedicated showcase for live video moments, candid clips, and reels.
- **Pulsing Play Badges:** Glowing animated play buttons, duration badges, and category labels.
- **Theater Modal Player:** Clicking any card opens a high-definition theater video player with automatic music ducking (music softly pauses while video plays and resumes upon closing).

### 3. 💖 18 Reasons Why You're So Special
- **Dedicated 18th Milestone:** Features 18 distinct cards honoring her 18th birthday.
- **3D Card Flip Animation:** Clicking any card flips it with a sweet chime sound effect.
- **Progress Tracker:** Displays a live counter (`X / 18 Discovered`) and triggers celebratory fireworks once all 18 reasons are uncovered!
- **"Reveal All" Button:** Unfolds all 18 cards sequentially for a delightful cascade.

### 4. 💌 Open When... Interactive Envelopes
- **7 3D Origami Envelopes:**
  1. *Open when you're sad.*
  2. *Open when you need a smile.*
  3. *Open when you're overthinking.*
  4. *Open when you feel lonely.*
  5. *Open when you need motivation.*
  6. *Open when you want to laugh.*
  7. *Open when you need a reminder of how amazing you are.*
- **Unfolding Flap Animation:** On click, the triangular flap folds open in 3D and slides out a stationery note.
- **Comfort Stationery Modal:** Displays heartfelt, comforting, and personalized letters on cute lined stationery.

### 5. 📜 Surprise Letters (Handwritten Milestone Notes)
- **Four Deeply Personal Letters:**
  1. *A Little Birthday Letter* (Celebrating the milestone of turning 18)
  2. *A Letter Full of Appreciation* (Gratitude for her presence and friendship)
  3. *A Funny Little Letter* (Gentle roasts, silly memories, and chaos files)
  4. *Wishing You an Amazing Year Ahead* (Hopes, dreams, adventures, and blessings)
- **Realistic Paper Unfolding Modal:** Textured notebook paper background, cursive handwriting styling, stamp seal, and date tag.

### 6. 🎂 Interactive Birthday Cake & 18 Candles
- **3-Tier Gourmet Chocolate Cake:** Decadent Belgian chocolate sponge tiers, glossy chocolate ganache glaze with realistic dripping details, edible gold and white chocolate truffle pearls, and a royal gold serving platter.
- **18 Glowing Candles:** Realistic flickering SVG flame animations with glowing ambient halos and individual number badges.
- **🎙️ Real-Time Microphone Blow Detection:**
  - Uses the Web Audio API to detect breath/wind volume frequency spikes.
  - Blowing gently into your device microphone extinguishes the candles!
- **✨ Tap-to-Blow Alternative:** Click individual candles to blow them out, or click *"Blow Out All Candles 💨"*.
- **Smoke Particles & Celebration:** Extinguished candles emit rising smoke particles. When all 18 are blown, confetti erupts and the *"Make a Wish, Nitisha! ✨"* banner appears with celebratory fanfare!

### 7. 🎵 Background Music Player
- **Dual-Mode Audio Engine:**
  - **Custom MP3 Support:** Place any song into `assets/music/birthday.mp3` or specify a custom URL in `js/config.js`.
  - **Built-In Music Box Synthesizer:** If no MP3 is present or when offline, an adorable music box synthesizer gently plays the "Happy Birthday" melody in a soothing lofi loop.
- **Floating Music Widget:** Rotating vinyl disc, Play/Pause, Mute/Unmute, and track title ticker.
- **Autoplay Compliant:** Starts smoothly upon user interaction (opening the gift box).

### 8. 🌸 Falling Petals & Floating Hearts Canvas
- High-performance 2D Canvas engine generating gently swaying sakura flower petals and soft glowing floating hearts in the background.

### 9. 🎉 Grand Finale Celebration
- Big sparkling heading: *"HAPPY 18TH BIRTHDAY, NITISHA! 💗"*.
- Grand celebratory message and signature from Swayansh Prusty.
- Interactive celebration buttons:
  - *"Shower Nitisha with Love 💖"* (spawns 50+ floating hearts)
  - *"Burst Birthday Crackers 🎆"* (triggers dual confetti cannons)
  - *"Copy Birthday Link 🔗"* (instant shareable link with cute toast alert)

### 10. 🧭 Floating Navigation Dock
- Glassmorphism pill navigation bar allowing instant smooth-scrolling to any chapter.

---

## 🛠️ How to Customize (For Swayansh Prusty)

All content is centralized inside **`js/config.js`**! You never need to touch HTML or CSS to change text, photos, letters, or music.

### 1. Replacing Photos & Videos
Open `js/config.js` and look for `gallery.items`:
```javascript
{
  id: 1,
  type: "photo",
  title: "The Sunshine Smile ☀️",
  caption: "That effortless smile that lights up any room instantly.",
  date: "Special Memory",
  sticker: "🎀",
  imageUrl: "assets/images/your-photo-1.jpg" // Put your photo in assets/images/
}
```
For videos, set `type: "video"` and provide `videoUrl: "assets/videos/clip.mp4"`.

### 2. Changing or Adding Custom Music
- Option A: Copy your favorite MP3 into `assets/music/birthday.mp3`.
- Option B: In `js/config.js`, set `customAudioUrl: "https://your-domain.com/song.mp3"`.

### 3. Editing Letters, 18 Reasons, or Final Surprise
In `js/config.js`, you can modify:
- `reasonsSection.cards`: Change any of the 18 reasons.
- `openWhenSection.envelopes`: Edit any of the 7 "Open When" messages.
- `lettersSection.letters`: Edit any of the 4 milestone letters.
- `finalSurprise`: Customize the grand finale message.

---

## 🚀 How to Run & View Locally

1. **Direct Browser Open:**
   Simply double-click `index.html` in file explorer, or right-click `index.html` -> **Open With** -> **Google Chrome** (or Edge / Safari).

2. **Using Python Local Server:**
   ```bash
   cd C:\Users\HP\.gemini\antigravity\scratch\nitisha-18th-birthday
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

3. **Using Node / VS Code Live Server:**
   Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🌐 How to Host & Share Online

To send Nitisha a live link:
1. **GitHub Pages (Free):** Create a GitHub repo, push these files, and enable GitHub Pages in Settings -> Pages.
2. **Vercel / Netlify (Free):** Drag and drop the `nitisha-18th-birthday` folder into Netlify Drop or Vercel dashboard for an instant `.netlify.app` or `.vercel.app` link.
