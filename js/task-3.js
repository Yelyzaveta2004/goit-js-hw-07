function getElementWidth(content, padding, border) {
  // Конвертуємо значення параметрів у числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Розраховуємо загальну ширину елемента
  const totalWidth = contentWidth + (paddingWidth * 2) + (borderWidth * 2);

  // Повертаємо результат
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200