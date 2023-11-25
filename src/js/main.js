function switchTheme(themeName) {

  const themeClasses = [
    'theme-hookers-green', 
    'theme-french-blue', 
    'theme-red', 
    'theme-orange'
  ];

  const themedElement = document.body;
  themedElement.classList.remove(...themeClasses);
  themedElement.classList.add(themeName);
}
