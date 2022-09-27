// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);
console.log(galleryMarkup);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', imageClick);

function createGalleryItems(galleryItems){
    return galleryItems.map(({preview, original, description}) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`).join('');
}

function imageClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== "IMG") {
        return;
    }
}

    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
