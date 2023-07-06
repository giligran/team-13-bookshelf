const supportPrevBtn = document.querySelector('.support-btn-prev');
const supportNextBtn = document.querySelector('.support-btn-next');
const fundsList = document.getElementById('funds-list');
let visibleItemCount = window.innerWidth >= 768 ? 6 : 4;
let currentSlideIndex = 0;

function showPreviousItems() {
  const prevSlideIndex = Math.max(currentSlideIndex - visibleItemCount, 0);
  currentSlideIndex = prevSlideIndex;
  updateButtonVisibility();
}

function showNextItems() {
  const nextSlideIndex = Math.min(currentSlideIndex + visibleItemCount, fundsList.children.length - visibleItemCount);
  currentSlideIndex = nextSlideIndex;
  updateButtonVisibility();
}

function updateButtonVisibility() {
  if (currentSlideIndex === 0) {
    supportPrevBtn.classList.add('visually-hidden');
    supportNextBtn.classList.remove('visually-hidden');
  } else if (currentSlideIndex + visibleItemCount >= fundsList.children.length) {
    supportPrevBtn.classList.remove('visually-hidden');
    supportNextBtn.classList.add('visually-hidden');
  } else {
    supportPrevBtn.classList.remove('visually-hidden');
    supportNextBtn.classList.remove('visually-hidden');
  }

  for (let i = 0; i < fundsList.children.length; i++) {
    const item = fundsList.children[i];
    if (i >= currentSlideIndex && i < currentSlideIndex + visibleItemCount) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
}

function updateVisibleItemCount() {
  visibleItemCount = window.innerWidth >= 768 ? 6 : 4;
  updateButtonVisibility();
}

supportNextBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showNextItems();
});

supportPrevBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showPreviousItems();
});

window.addEventListener('resize', () => {
  updateVisibleItemCount();
});

updateButtonVisibility();
