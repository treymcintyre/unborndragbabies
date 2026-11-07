/*
  ADD YOUR ARTWORK HERE.
*/
const galleryItems = [
  {
    image: "images/SharonVonBathroom.png",
    title: "Sharon Von Bathroom"
  },
  {
    image: "images/Hartigay.png",
    title: "Hartigay"
  },
  {
    image: "images/PistachioNutmeats.png",
    title: "Pistachio Nutmeats"
  },
    {
    image: "images/ZizisaJoke.png",
    title: "Zizisa Joke"
  },
  {
    image: "images/dborahlive.png",
    title: "Déborah Live"
  },
  {
    image: "images/MissMarshaLarts.png",
    title: "Miss Marsha Larts"
  },
  {
    image: "images/SheHearse.png",
    title: "She Hearse"
  },
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
