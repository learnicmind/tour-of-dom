const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
    section.style.paddingLeft = '10px';
}

// const placesContaier = document.getElementById('places-container');
// placesContaier.style.backgroundColor = 'yellow'

const placesContaier = document.getElementById('places-container');
placesContaier.classList.add('yellow-bg');