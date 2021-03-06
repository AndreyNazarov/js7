const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulRef = document.querySelector('#gallery');

const galleryListTag = array => {
  const gallery = array.reduce((acc, element) => {
    const listItem = document.createElement('li');
    const image = document.createElement('img');

    image.setAttribute('src', element.url);
    image.setAttribute('alt', element.alt);

    listItem.appendChild(image);

    acc += `<li>${listItem.innerHTML}</li>`;
    return acc;
  }, '');
  ulRef.insertAdjacentHTML(`afterbegin`, `${gallery}`);
};

console.log(galleryListTag(images));
