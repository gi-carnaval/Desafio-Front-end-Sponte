// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    
    bg: string,
    bg2: string,
    bg3: string,
    inputBackground: string,
    requiredColor: string,
    border: string,
    borderTable: string,
    primary: string,
    text: string,
    textInactive: string,

  }

}