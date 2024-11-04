const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('Laptop');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});

const specTab = document.getElementById('spec-tab');
const reviewTab = document.getElementById('review-tab');
const specificationsPanel = document.getElementById('specifications');
const reviewsPanel = document.getElementById('reviews');

specificationsPanel.style.display = 'block';
reviewsPanel.style.display = 'none';

specTab.addEventListener('click', function() {
    specificationsPanel.style.display = 'block';
    reviewsPanel.style.display = 'none';
    specTab.classList.add('active');
    reviewTab.classList.remove('active');
});

reviewTab.addEventListener('click', function() {
    reviewsPanel.style.display = 'block';
    specificationsPanel.style.display = 'none';
    reviewTab.classList.add('active');
    specTab.classList.remove('active');
});
