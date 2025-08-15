# Images Directory

This directory contains the luxury real estate images used in your website. The images have been integrated into the following sections:

## Current Image Usage

### Hero Section
- `luxury1.webp` - Main hero background image (large luxury home)

### Property Listings
- `luxury1.webp` - Luxury Modern Villa (Beverly Hills, CA)
- `luxury2.jpg` - Downtown Penthouse (Downtown LA, CA)  
- `luxury3.png` - Family Home with Pool (Pasadena, CA)
- `luxury1.webp` - Investment Property (Santa Monica, CA) - reused for variety

## Image Specifications

- **luxury1.webp**: 472KB - High-quality luxury home exterior
- **luxury2.jpg**: 155KB - Modern penthouse/condo
- **luxury3.png**: 1000KB - Spacious family home

## How Images Are Used

1. **Hero Background**: `luxury1.webp` serves as the main hero section background
2. **Property Cards**: Each property listing displays its assigned image
3. **Responsive Design**: Images automatically scale and crop appropriately
4. **Optimization**: Images use `object-fit: cover` for consistent display

## Netlify Deployment

**IMPORTANT**: For Netlify deployment, images are copied to the `public/` folder during build.

- **Source**: Images are stored in `images/` folder
- **Build**: Images are automatically copied to `public/` folder
- **Deploy**: Images are served from the root path (e.g., `/luxury1.webp`)

## Customization

To change which images are used for specific properties:
1. Edit the `properties` array in `src/components/Listings.jsx`
2. Update the `image` property for each listing
3. Ensure the image path starts with `/` (e.g., `/luxury1.webp`)

## Image Guidelines

- **Format**: WebP, JPG, and PNG are all supported
- **Quality**: High resolution for professional appearance
- **Style**: Luxury real estate photography
- **Size**: Optimize for web performance while maintaining quality

## Troubleshooting Netlify Issues

If images don't display on Netlify:
1. Ensure images are in the `public/` folder
2. Check that image paths start with `/` (absolute paths)
3. Verify the `netlify.toml` configuration file exists
4. Check Netlify build logs for any errors

The website now displays your actual luxury property images and is properly configured for Netlify deployment!
