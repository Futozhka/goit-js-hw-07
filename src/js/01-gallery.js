import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const createGalleryItemsMarkup = items => {
  return items
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="image__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `)
    .join('');
};

const markGallery = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', markGallery);

// Обробник події для відкриття модального вікна
galleryList.addEventListener('click', event => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;
  console.log('Large Image URL:', largeImageURL);

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();
});