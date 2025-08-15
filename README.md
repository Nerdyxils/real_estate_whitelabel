# Real Estate Agent Portfolio Website

A professional, modern, single-page website built with React and CSS for real estate agents to showcase their portfolio and services.

## 🏠 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Single Page Layout**: All sections accessible from one page
- **Contact Form**: Functional contact form for client inquiries
- **Property Showcase**: Display featured properties with details
- **Testimonials**: Client feedback and reviews section
- **Professional Branding**: Easy to customize for any real estate agent

## 🚀 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Emoji icons (easily replaceable with custom icons)

## 📁 Project Structure

```
real-estate/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section with background
│   │   ├── Listings.jsx        # Property listings grid
│   │   ├── About.jsx           # Agent information
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Footer.jsx          # Footer with links
│   │   └── *.css               # Component-specific styles
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── App.css                 # App-level styles
│   └── index.css               # Global styles and variables
├── images/                     # Image assets directory
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
└── index.html                  # HTML entry point
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Quick Start
1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open browser** and navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎨 Customization Guide

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #ef2d56;      /* Main accent color */
  --secondary-color: #2c3e50;    /* Dark text color */
  --accent-color: #3498db;       /* Secondary accent */
  /* ... other variables */
}
```

### Agent Information
Update the following files with your information:

#### Hero Section (`src/components/Hero.jsx`)
- Change "Sarah Johnson" to your name
- Update statistics (clients, properties sold, years experience)
- Modify subtitle text

#### About Section (`src/components/About.jsx`)
- Update agent description
- Change credentials (license, experience, specialization)
- Replace placeholder text with your story

#### Contact Section (`src/components/Contact.jsx`)
- Update office address
- Change phone number
- Update email address
- Modify business hours

#### Footer (`src/components/Footer.jsx`)
- Update company name
- Change contact information
- Update social media links

### Property Listings
Edit `src/components/Listings.jsx`:
- Update property data (titles, locations, prices, descriptions)
- Modify property details (beds, baths, square footage)
- Add or remove properties as needed

### Testimonials
Edit `src/components/Testimonials.jsx`:
- Replace client names and roles
- Update testimonial text
- Modify ratings if needed

### Logo and Branding
- Update the logo text in `src/components/Header.jsx`
- Change "Real Estate Pro" to your business name
- Update page title in `index.html`

## 🖼️ Adding Images

1. **Place your images** in the `images/` directory
2. **Use the exact filenames** specified in `images/README.md`
3. **Recommended image sizes** are provided in the README
4. **Test the website** to ensure all images display correctly

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ✨ Features & Animations

- **Smooth scrolling** between sections
- **Hover effects** on buttons and cards
- **Fade-in animations** on scroll
- **Mobile-friendly navigation** with hamburger menu
- **Form validation** and user feedback
- **Professional typography** with Poppins font

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Sections
1. Create new component in `src/components/`
2. Add CSS file for styling
3. Import and add to `src/App.jsx`
4. Update navigation links if needed

### Styling Guidelines
- Use CSS variables for consistent theming
- Follow the existing responsive breakpoints
- Maintain the clean, professional aesthetic
- Test on multiple screen sizes

## 📞 Support & Customization

This is a white-label portfolio project designed to be easily customizable. The code is well-commented and structured for simple modifications.

### Common Customizations
- **Color scheme**: Update CSS variables
- **Content**: Replace placeholder text with your information
- **Images**: Add your property and agent photos
- **Layout**: Modify component structure as needed
- **Functionality**: Add new features or modify existing ones

## 📄 License

This project is provided as-is for portfolio and demonstration purposes. Feel free to customize and use for your real estate business.

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with default settings

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server

---

**Built with ❤️ for real estate professionals**
