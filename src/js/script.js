const imagesUrls = [
    "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
    "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',



]

for (let i = 0; i < imagesUrls.length; i++) {

    const label = document.createElement('label');
    const input = document.createElement('input');
    const div = document.createElement('div');
    const expandIcon = document.createElement('i');
    label.setAttribute('for', 'input' + i);
    input.setAttribute('id', 'input' + i)
    input.setAttribute('type', 'checkbox');
    expandIcon.classList.add('fa-solid', 'fa-expand', 'fa-lg', 'expand');
    label.style.background = 'url(' + imagesUrls[i] + ')'
    label.classList.add('background');
    label.appendChild(input);
    div.appendChild(label);
    div.appendChild(expandIcon);
    const container = document.getElementById('container');
    container.appendChild(div);
}

document.addEventListener('DOMContentLoaded', () => {
    let lazyBackground;

    if ('IntersectionObserver' in window) {
        lazyBackground = document.querySelectorAll('.background');

        const backgroundObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const backgroundImg = entry.target;
                    backgroundImg.classList.remove('background');
                    backgroundObserver.unobserve(backgroundImg);
                }
            })
        })
        console.log('hey')
        lazyBackground.forEach(backgroundImg => {
            backgroundObserver.observe(backgroundImg)
        })
    }
})