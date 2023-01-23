// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  const itemMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
  return itemMarkup;
}

refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
