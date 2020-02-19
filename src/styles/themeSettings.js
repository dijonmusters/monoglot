const screenSizes = {
  large: '768px',
}

const common = {
  isLargeScreen: `(min-width: ${screenSizes.large})`,
}

const lightTheme = {
  ...common,
  backgroundColor: '#E2E2E2',
  text: '#363537',
  textHighlight: '#5551FF',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  separator: '#bbb',
}

const darkTheme = {
  ...common,
  backgroundColor: '#363537',
  text: '#FAFAFA',
  textHighlight: '#aaf0e3',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  separator: '#bbb',
}

export { lightTheme, darkTheme }
