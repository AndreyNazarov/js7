const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const defeaultRef = array => {
  const products = [];
  array.forEach(item => {
    const product = document.createElement('li');
    product.textContent = 'item';
    products.push(product);
  });
  ingredientsRef.append(...products);
};

console.log(ingredientsRef);
