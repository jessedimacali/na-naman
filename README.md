# Na Naman

A beautiful, interactive video showcase with a heartfelt message that appears after the video ends.

## Features

✨ **Clean Design** - Modern, responsive UI with beautiful gradients
📹 **Video Player** - Built-in HTML5 video controls
💬 **Message Display** - Elegant modal that appears when video ends
📱 **Responsive** - Works great on desktop and mobile devices
🎨 **Smooth Animations** - Fade-in and slide-up effects

## Setup

1. Replace `your-video.mp4` in `index.html` with your actual video file
   - You can use a local file path or a URL to an online video

2. Open `index.html` in your browser

3. Play the video and wait for it to end to see the message

## File Structure

```
na-naman/
├── index.html      # Main HTML file
├── styles.css      # Styling and animations
├── script.js       # Video and message logic
└── README.md       # This file
```

## How It Works

1. User opens the page and sees the video player
2. Video plays with standard controls
3. When the video ends, a beautiful modal appears
4. The heartfelt message is displayed
5. User can close the message by clicking the button or outside the modal

## Customization

### Change the Video
In `index.html`, update the video source:
```html
<source src="your-video.mp4" type="video/mp4">
```

### Change Colors
Edit the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change the Message
The message is hardcoded in `script.js`. You can modify it or make it dynamic.

## Browser Compatibility

✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers

## License

Free to use and modify.
