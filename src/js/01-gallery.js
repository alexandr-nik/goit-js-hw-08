// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const items = [];

const createElementGallery = function () {
  galleryItems.map(e => {
    items.push(
      `<div class="gallery__item">
  <a href="${e.original}" class="gallery__link">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" width="340">
  </a></div>`
    );
  });
};
createElementGallery();
galleryEl.innerHTML = items.join('');

const galleryLightbox = new SimpleLightbox('.gallery .gallery__link', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
