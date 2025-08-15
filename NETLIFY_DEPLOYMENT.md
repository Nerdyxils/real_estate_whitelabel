# Netlify Deployment Guide

This guide will help you deploy your real estate website to Netlify with working images.

## 🚀 **Quick Deploy**

### Option 1: Drag & Drop (Recommended for testing)
1. Run `npm run build` locally
2. Drag the `dist` folder to Netlify's deploy area
3. Your site will be live instantly!

### Option 2: Git Integration (Recommended for production)
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (or higher)

## 🔧 **Build Configuration**

### Package.json Scripts
```json
{
  "scripts": {
    "build": "cp -r images/* public/ && vite build"
  }
}
```

This ensures images are copied to the public folder during build.

### Netlify Configuration (netlify.toml)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

## 📁 **File Structure for Netlify**

```
real-estate/
├── src/                    # Source code
├── images/                 # Source images
├── public/                 # Build images (auto-copied)
├── dist/                   # Build output
├── netlify.toml           # Netlify config
└── package.json           # Dependencies
```

## 🖼️ **Image Paths**

### In Components
- **Hero**: `url(/luxury1.webp)`
- **Listings**: `src="/luxury1.webp"`
- **All paths start with `/`** (absolute paths)

### Why This Works
- Images are copied to `public/` during build
- Vite includes `public/` contents in `dist/`
- Netlify serves `dist/` contents from root
- Absolute paths `/luxury1.webp` work correctly

## 🚨 **Common Issues & Solutions**

### Issue: Images not displaying
**Solution**: 
1. Check that images are in `public/` folder
2. Verify image paths start with `/`
3. Ensure `netlify.toml` exists
4. Check build logs for errors

### Issue: Build fails
**Solution**:
1. Ensure Node.js 18+ is installed
2. Run `npm install` before building
3. Check for syntax errors in components

### Issue: Images load slowly
**Solution**:
1. Optimize image sizes (compress without losing quality)
2. Use WebP format when possible
3. Netlify automatically serves images with CDN

## 📋 **Deployment Checklist**

- [ ] Images are in `images/` folder
- [ ] `public/` folder exists
- [ ] `netlify.toml` is configured
- [ ] Image paths start with `/`
- [ ] Build command is `npm run build`
- [ ] Publish directory is `dist`
- [ ] Node version is 18+

## 🔄 **Updating Images**

1. **Replace images** in `images/` folder
2. **Keep same filenames** or update component paths
3. **Rebuild and redeploy**:
   ```bash
   npm run build
   # Deploy dist/ folder to Netlify
   ```

## 🌐 **Custom Domain Setup**

1. **Add custom domain** in Netlify dashboard
2. **Configure DNS** (A record to Netlify IP)
3. **Enable HTTPS** (automatic with Netlify)

## 📱 **Performance Optimization**

- **Images**: Automatically optimized by Netlify
- **CSS/JS**: Minified and compressed
- **CDN**: Global content delivery
- **Caching**: Optimized headers for images

## 🆘 **Need Help?**

1. **Check Netlify build logs** for errors
2. **Verify file structure** matches this guide
3. **Test locally** with `npm run build`
4. **Check image paths** in browser dev tools

Your website should now deploy to Netlify with all images working correctly! 🎉
