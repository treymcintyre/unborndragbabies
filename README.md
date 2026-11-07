# Unborn Drag Babies website

A simple, responsive, single-page gallery for GitHub Pages.

## Add an image

1. Upload the image into the `images` folder.
2. Open `gallery.js`.
3. Add an entry inside `galleryItems`, using the image filename and title. You can also add an optional paragraph description:

   ```js
   { image: "images/portrait-01.jpg", title: "The image title", description: "A paragraph about this image." },
   ```

4. If you don't want a paragraph for a particular image, simply leave out the `description` field:

   ```js
   { image: "images/portrait-02.jpg", title: "Another image title" },
   ```

5. Save/commit the changes. The gallery will update when GitHub Pages publishes them.

The display area is always 4:5. Images are shown with `object-fit: contain` so the full artwork remains visible without cropping. Paragraphs appear below each title and are optional on an image-by-image basis.

## Files

- `index.html` — page layout and styling
- `gallery.js` — gallery image list, optional descriptions, and navigation
- `images/logo.png` — supplied logo
- `images/` — add gallery images here
