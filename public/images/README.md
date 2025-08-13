# Product Images

This folder contains all product images for the Outwest Outfitters e-commerce website.

## Folder Structure

```
public/images/products/
├── tents/           # Tent product images
├── sleeping-bags/   # Sleeping bags and pads images
├── backpacks/       # Backpack and bag images
├── camp-kitchen/    # Camp kitchen equipment images
└── camp-furniture/  # Camp furniture images
```

## Image Guidelines

### File Naming Convention

- Use descriptive names: `alpine-peak-4person-tent.jpg`
- Use lowercase letters and hyphens
- Include product key features in the name
- Use consistent file extensions (.jpg, .png, .webp)

### Image Specifications

- **Main Product Image**: 800x600px (16:9 aspect ratio)
- **Gallery Images**: 800x600px or 1200x800px
- **Format**: JPG for photos, PNG for graphics with transparency
- **File Size**: Keep under 500KB for main images, under 1MB for gallery images
- **Quality**: High quality (80-90%) for web optimization

### Adding New Images

1. Place images in the appropriate category folder
2. Update the `products.ts` file with the new image paths
3. Use relative paths starting with `/images/products/[category]/[filename]`
4. Ensure all images are optimized for web use

### Example Image Paths

```typescript
// In products.ts
image: "/images/products/tents/alpine-peak-4person-tent.jpg",
images: [
  "/images/products/tents/alpine-peak-4person-tent.jpg",
  "/images/products/tents/alpine-peak-4person-tent-2.jpg",
  "/images/products/tents/alpine-peak-4person-tent-3.jpg"
]
```

## Current Products

- **Tents**: 5 products
- **Sleeping Bags & Pads**: 5 products
- **Backpacks & Bags**: 5 products
- **Camp Kitchen**: 5 products
- **Camp Furniture**: 5 products

Total: 25 products (expandable to 40+ as mentioned in requirements)
