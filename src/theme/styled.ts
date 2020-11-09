import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
    };
    colors: {
      neutralWhite: string;
      brandColorPrimary: string;
      brandColorSecondary: string;
      blueGray10: string;
      blueGray50: string;
      blueGray100: string;
      blueGray300: string;
      blueGray400: string;
      blueGray600: string;
      blueGray900: string;
    };
  }
}
