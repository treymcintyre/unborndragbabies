/*
  ADD YOUR ARTWORK HERE.

  1. Put each image file in the "images" folder.
  2. Add an entry below with its filename, title, and (optionally) description.
  3. Save/commit the changes to publish the update.

  Example with a paragraph:
  { image: "images/portrait-01.jpg", title: "Portrait title", description: "A paragraph about this image." },

  Example without a paragraph:
  { image: "images/portrait-02.jpg", title: "Another portrait" },
*/
 ```js
   { image: "SharonVonBathroom.png", title: "Another image title" },
   ```

const galleryItems = [
  // Add entries here, one per image:
  // { image: "images/your-image.jpg", title: "Your image title", description: "Optional paragraph text." },
];

const emptyState = document.getElementById("emptyState");
const galleryView = document.getElementById("galleryView");
const imageElement = document.getElementById("galleryImage");
const titleElement = document.getElementById("galleryTitle");
const descriptionElement = document.getElementById("galleryDescription");
const counterElement = document.getElementById("counter");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showImage() {
  if (!galleryItems.length) {
    emptyState.hidden = false;
    galleryView.hidden = true;
    counterElement.textContent = "";
    return;
  }

  emptyState.hidden = true;
  galleryView.hidden = false;

  const item = galleryItems[currentIndex];
  imageElement.src = item.image;
  imageElement.alt = item.title;
  titleElement.textContent = item.title;
  descriptionElement.textContent = item.description || "";
  counterElement.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

  previousButton.disabled = galleryItems.length < 2;
  nextButton.disabled = galleryItems.length < 2;
}

function move(direction) {
  if (galleryItems.length < 2) return;
  currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
  showImage();
}

previousButton.addEventListener("click", () => move(-1));
nextButton.addEventListener("click", () => move(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === "ArrowRight") move(1);
});

showImage();
