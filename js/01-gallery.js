import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function addNewGalleryItem(newItem) {
  newItem.forEach((el) => {
    const newGalleryItem = `<li class='gallery__item'><img src='${el.preview}' alt='${el.description}' class='gallery__image' data-original='${el.original}' /></li>`;
    gallery.insertAdjacentHTML("beforeend", newGalleryItem);
  });
}
addNewGalleryItem(galleryItems);
function showOriginal(event) {
  const galleryImage = event.target;
  const originalSrc = galleryImage.dataset.original;
  const instance = basicLightbox.create(`<img src="${originalSrc}"/>`);
  instance.show();

  function closeOnEscape(event) {
    event.preventDefault();
    if (event.key === "Escape") {
      instance.close();
    }
  }
  document.addEventListener("keydown", closeOnEscape);
}

const galleryImages = document.querySelectorAll(".gallery__image");
galleryImages.forEach((image) => {
  image.addEventListener("click", showOriginal);
});
