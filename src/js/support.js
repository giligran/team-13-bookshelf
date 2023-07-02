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
    img: "./img/logo-partners/msf@2x.png",
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
const visibleItemCount = 4; 
let currentSlideIndex = 0;

function showNextItems() {
  const nextSlideIndex = currentSlideIndex + visibleItemCount;
  fundsList.innerHTML = ''; 
  for (let i = currentSlideIndex; i < nextSlideIndex && i < funds.length; i++) {
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
    img.src = fund.img;

    link.appendChild(img);
    item.appendChild(link);
    fundsList.appendChild(item);

    link.dataset.slideIndex = i;
  }
  currentSlideIndex = nextSlideIndex;
  updateNavigationButtons();
}

function showPreviousItems() {
  const prevSlideIndex = Math.max(currentSlideIndex - visibleItemCount, 0);
  fundsList.innerHTML = ''; 
  for (let i = prevSlideIndex; i < currentSlideIndex; i++) {
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
    img.src = fund.img;

    link.appendChild(img);
    item.appendChild(link);
    fundsList.appendChild(item);

    link.dataset.slideIndex = i;
  }
  currentSlideIndex = prevSlideIndex;
  updateNavigationButtons();
}

function updateNavigationButtons() {
  supportPrevBtn.disabled = currentSlideIndex === 0;
  supportNextBtn.disabled = currentSlideIndex + visibleItemCount >= funds.length;
}

supportNextBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  showNextItems();
});

supportPrevBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
});

showNextItems();
