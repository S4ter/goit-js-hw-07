import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function addNewGalleryItem(newItem) {
  newItem.forEach((el) => {
    const newGalleryItem = `
    <li><a class="gallery__item" href='${el.original}' alt='${el.description}'>
      <img class="gallery__image" src='${el.preview}' alt='${el.description}' />
    </a>
    </li>`;
    gallery.insertAdjacentHTML("beforeend", newGalleryItem);
  });
}
addNewGalleryItem(galleryItems);

let newGallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
  captionPosition: "bottom",
});
newGallery.on("show.simplelightbox", function () {});
