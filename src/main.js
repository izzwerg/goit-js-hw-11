import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', imageSearch);
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '11329962-6436ba51ddb58bb96deed169a';

function imageSearch(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  loader.classList.add('is-visible');

  const form = e.currentTarget;
  const searchTerm = form.elements.searchTerm.value;

  console.log(searchTerm);
  getImages(searchTerm)
    .then((images) => {
        console.log(images);
        if (images = {}) {
            errMessage();
        } else {
            
        }
    })
    .finally(() => form.reset());
}

function getImages(searchTerm) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  return fetch(`${BASE_URL}/?${urlParams}`).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

function errMessage() {
    iziToast.show({
      position: 'topRight',
      messageColor: 'white',
      iconUrl: 'error.svg',
      iconColor: 'white',
      color: '#EF4040',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    loader.classList.remove('is-visible');
  };