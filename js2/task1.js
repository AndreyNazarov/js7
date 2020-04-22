{
  /* <ul id="categories">
      <li class="item">
        <h2>Животные</h2>
    
        <ul>
          <li>Кот</li>
          <li>Хомяк</li>
          <li>Лошадь</li>
          <li>Попугай</li>
        </ul>
      </li>
      <li class="item">
        <h2>Продукты</h2>
    
        <ul>
          <li>Хлеб</li>
          <li>Петрушка</li>
          <li>Творог</li>
        </ul>
      </li>
      <li class="item">
        <h2>Технологии</h2>
    
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </li>
    </ul> */
}
const categoriesRef = document.querySelector('#categories');
const measureRef = document.querySelectorAll('li.item');

console.log(`В списке ${measureRef.length} категории.`);

const listRef = items =>
  items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const category = item.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Category: ${category}`);
  });

listRef(measureRef);

// const listItemRef = document.createElement('li');
// deskRef.textContent = 'item';

// const titlleRef = document.createElement('h2');
// titlleRef.textContent = 'Животные';

// const listRef = document.createElement('ul');
// const list = document.createElement('li');
// list.textContent = 'Кот';
// const list2 = document.createElement('li');
// list2.textContent = 'Хомяк';
// const list3 = document.createElement('li');
// list3.textContent = 'Лошадь';
// const list4 = document.createElement('li');
// list4.textContent = 'Попугай';

// listRef.append(list, list2, list3, list4);

// deskRef.append(titlleRef, listRef);

// const titleRef = document.createElement('h2');
// deskRef.textContent = 'Животные';

// const listRef = document.createElement('ul');
// const list = document.createElement('li');
// list.textContent = 'Кот';
// const list2 = document.createElement('li');
// list2.textContent = 'Хомяк';
// const list3 = document.createElement('li');
// list3.textContent = 'Лошадь';
// const list4 = document.createElement('li');
// list4.textContent = 'Попугай';
