import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#1E3A8A',
    secondary: '#F97316',
    tertiary: '#0EA5A5',
    error: '#B00020',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF'
  }
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#93C5FD',
    secondary: '#FDBA74',
    tertiary: '#5EEAD4',
    error: '#CF6679',
    background: '#121212',
    surface: '#121212',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    onError: '#000000'
  }
};

export const theme = lightTheme;
export { lightTheme, darkTheme };
