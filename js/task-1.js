const categories = document.querySelectorAll('ul#categories > .item');
console.log(`У списку ${categories.length} категорії.`);
categories.forEach((category) => {
  const title = category.querySelector('h2').textContent;
  const items = category.querySelectorAll('li');
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${items.length}`);
});
