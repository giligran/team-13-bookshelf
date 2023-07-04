const funds = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: './img/logo-partners/save-the-children@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../img/logo-partners/hope@2x.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: "/img/logo-partners/u24@2x.png",
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: "./img/logo-partners/imc@2x.png",
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: './img/logo-partners/msf.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: "./img/logo-partners/razom@2x.png",
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: "./img/logo-partners/aah@2x.png",
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: "./img/logo-partners/world-vision@2x.png",
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: './img/logo-partners/prytula@2x.png',
  },
]

const fundsList = document.getElementById('funds-list');
const supportPrevBtn = document.querySelector('.support-btn-prev');
const supportNextBtn = document.querySelector('.support-btn-next');
const visibleItemCount = window.innerWidth >= 768 ? 6 : 4;
let currentSlideIndex = 0;

function showPreviousItems() {
  const prevSlideIndex = Math.max(currentSlideIndex - visibleItemCount, 0);
  currentSlideIndex = prevSlideIndex;
  fundsList.innerHTML = '';
  createItems(currentSlideIndex, currentSlideIndex + visibleItemCount);
  updateButtonVisibility();
}

function showNextItems() {
  const nextSlideIndex = Math.min(currentSlideIndex + visibleItemCount, funds.length - visibleItemCount);
  currentSlideIndex = nextSlideIndex;
  fundsList.innerHTML = '';
  createItems(currentSlideIndex, currentSlideIndex + visibleItemCount);
  updateButtonVisibility();
}

function createItems(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex && i < funds.length; i++) {
    const fund = funds[i];
    const item = document.createElement('li');
    const link = document.createElement('a');
    const img = document.createElement('img');

    link.target = '_blank';
    link.rel = 'noreferrer noopener';

    item.classList.add('support-item');
    link.classList.add('support-link');
    img.classList.add('support-img');

    link.href = fund.url;
    const paddedIndex = (i + 1).toString().padStart(2, '0');

    const numberElement = document.createElement('span');
    numberElement.classList.add('support-number');
    numberElement.innerText = paddedIndex;

    item.appendChild(numberElement);
    item.appendChild(link);

    img.src = fund.img;
    link.appendChild(img);

    fundsList.appendChild(item);

    link.dataset.slideIndex = i;
  }
}

function updateButtonVisibility() {
  if (currentSlideIndex === 0) {
    supportPrevBtn.classList.add('visually-hidden');
    supportNextBtn.classList.remove('visually-hidden');
  } else if (currentSlideIndex + visibleItemCount >= funds.length) {
    supportPrevBtn.classList.remove('visually-hidden');
    supportNextBtn.classList.add('visually-hidden');
  } else {
    supportPrevBtn.classList.remove('visually-hidden');
    supportNextBtn.classList.remove('visually-hidden');
  }
}

supportNextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showNextItems();
});

supportPrevBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showPreviousItems();
});

createItems(currentSlideIndex, currentSlideIndex + visibleItemCount);
updateButtonVisibility();
