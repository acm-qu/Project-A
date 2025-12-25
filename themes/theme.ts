import { createTheme, DEFAULT_THEME, MantineColorsTuple } from '@mantine/core';

export const ThemeA = createTheme({
  primaryColor: 'blue',
  colors: {
    secondary: DEFAULT_THEME.colors.cyan as MantineColorsTuple,
  },
});

export const ThemeB = createTheme({
  primaryColor: 'teal',
  colors: {
    secondary: DEFAULT_THEME.colors.lime as MantineColorsTuple,
  },
});

export const ThemeC = createTheme({
  primaryColor: 'violet',
  colors: {
    secondary: DEFAULT_THEME.colors.grape as MantineColorsTuple,
  },
});

export const ThemeD = createTheme({
  primaryColor: 'pink',
  colors: {
    secondary: DEFAULT_THEME.colors.red as MantineColorsTuple,
  },
});

