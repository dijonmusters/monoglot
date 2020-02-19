const screenSizes = {
  large: '500px',
}

const common = {
  isLargeScreen: `(min-width: ${screenSizes.large})`,
}

const lightTheme = {
  ...common,
  backgroundColor: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  separator: '#bbb',
}

const darkTheme = {
  ...common,
  backgroundColor: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  separator: '#bbb',
}

export { lightTheme, darkTheme }
