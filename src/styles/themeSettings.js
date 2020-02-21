const screenSizes = {
  large: '768px',
}

const common = {
  isLargeScreen: `(min-width: ${screenSizes.large})`,
}

const lightTheme = {
  ...common,
  backgroundColor: '#E2E2E2',
  backgroundColorLight: '#E9E9E9',
  text: '#363537',
  textLighter: '#666567',
  textLight: '#868587',
  highlightColor: '#5551FF',
  separator: '#bbb',
  isLightMode: true,
}

const darkTheme = {
  ...common,
  backgroundColor: '#363537',
  backgroundColorLight: 'rgb(74, 73, 75)',
  text: '#FAFAFA',
  textLighter: '#CACACA',
  textLight: '#AAAAAA',
  highlightColor: '#aaf0e3',
  separator: '#bbb',
  isDarkMode: true,
}

export { lightTheme, darkTheme }
