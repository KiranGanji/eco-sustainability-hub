export const theme = {
  text: {
    primary: (isGreenMode: boolean) => 
      isGreenMode ? 'text-white' : 'text-gray-900',
    secondary: (isGreenMode: boolean) =>
      isGreenMode ? 'text-gray-100' : 'text-gray-700',
    muted: (isGreenMode: boolean) =>
      isGreenMode ? 'text-gray-300' : 'text-gray-500',
    heading: (isGreenMode: boolean) =>
      `text-xl font-semibold ${isGreenMode ? 'text-white' : 'text-gray-900'}`,
    subheading: (isGreenMode: boolean) =>
      `text-lg font-medium ${isGreenMode ? 'text-gray-100' : 'text-gray-800'}`,
    body: (isGreenMode: boolean) =>
      `text-base ${isGreenMode ? 'text-gray-200' : 'text-gray-600'}`,
    link: (isGreenMode: boolean) =>
      isGreenMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
  },
  background: {
    primary: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-900' : 'bg-gray-50',
    secondary: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-800' : 'bg-white',
    accent: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-700' : 'bg-gray-100',
    highlight: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-700/50' : 'bg-gray-50'
  },
  card: {
    background: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-800' : 'bg-white',
    hover: (isGreenMode: boolean) =>
      isGreenMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
    border: (isGreenMode: boolean) =>
      isGreenMode ? 'border-gray-700' : 'border-gray-200',
    highlight: (isGreenMode: boolean) =>
      isGreenMode ? 'bg-gray-700' : 'bg-gray-50'
  },
  button: {
    primary: (isGreenMode: boolean) =>
      isGreenMode 
        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
        : 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: (isGreenMode: boolean) =>
      isGreenMode
        ? 'bg-gray-700 hover:bg-gray-600 text-gray-100'
        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
  }
}