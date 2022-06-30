const containerhamburger = document.querySelector('#nav-toggle-id');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.menu-icone');
const hamburger = document.querySelector('#hamb');

containerhamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove('open');
    navIcon.forEach((icon) => {
      icon.classList.add('hidden');
    });
    hamburger.classList.remove('hidden');
  }
});

// end with menu and start and start with speakers

const splis = [{
  imageLink: './images/Coco.png',
  title: 'Coco Brown',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './images/bernando.jpg',
  title: 'Bernardo Caldas',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './images/Patama.png',
  title: 'Patama Chantaruck',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './images/TamiEvans-500x281.jpg',
  title: 'Tami Evans',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './images/bryan-goode.png',
  title: 'Bryan Goode',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
},

{
  imageLink: './images/t6.jpeg',
  title: 'Jean Bulambo',
  description: 'Lorem ipsum dolor.',
  fullDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}];

const cardContainer = document.querySelector('.fs');
const speakers = () => {
// eslint-disable-next-line no-plusplus
  for (let i = 0; i < splis.length; i++) {
    cardContainer.innerHTML += `<div class="speakers">
      <img id="speaker1" class="speak-img" src="${splis[i].imageLink}" alt="${splis[i].title}">
      <div class="speak-element">
        <h3 id="title">${splis[i].title}</h3>
        <h6 id="subTitle">${splis[i].description}
        </h6>
        <p id="paragraph">
          ${splis[i].fullDescription}
        </p>
      </div>
  </div>`;
  }
};

speakers();