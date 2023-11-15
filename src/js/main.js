function switchTheme(themeName) {
  // Assuming 'theme' is a class that denotes the theme
  // Remove all other theme classes first
  const themeClasses = [
    'theme-french-blue', 'theme-cornflower-blue', 'theme-metallic-seaweed',
    'theme-teal2', 'theme-cerulean', 'theme-hookers-green',
    'theme-bottle-green', 'theme-forest-green', 'theme-myrtle-green'
  ];

  // Get the element that you want to apply the themes to, for example, body
  const themedElement = document.body; // or document.documentElement for <html> element

  // Remove all existing theme classes
  themedElement.classList.remove(...themeClasses);

  // Add the selected theme class
  themedElement.classList.add(themeName);
}
