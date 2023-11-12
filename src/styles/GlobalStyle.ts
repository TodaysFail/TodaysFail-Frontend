import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
    background: var(--default-background);

    /* colors */
    --black: #000;
    --white: #FFF;
    
    --gray-050: #FAFAFA;
    --gray-100: #F5F5F5;
    --gray-200: #EEEEEE;
    --gray-300: #E0E0E0;
    --gray-400: #BDBDBD;
    --gray-500: #9E9E9E;
    --gray-600: #757575;
    --gray-700: #616161;
    --gray-800: #424242;
    --gray-900: #212121;
    
    --orange-050: #FDE8E4;
    --orange-100: #FFCBB5;
    --orange-200: #FFA985;
    --orange-300: #FF8752;
    --orange-400: #FF6C28;
    --orange-500: #FE5200;
    --orange-600: #F34C00;
    --orange-700: #E54500;
    --orange-800: #D83D00;
    --orange-900: #BF2F00;

    --green-050: #E4F8ED;
    --green-100: #BDEDD2;
    --green-200: #90E2B5;
    --green-300: #57D796;
    --green-400: #00CD7E;
    --green-500: #00C367;
    --green-600: #00B35C;
    --green-700: #00A04E;
    --green-800: #008F42;
    --green-900: #006E2D;

    --red-050: #FFF5F5;
    --red-100: #FFDADB;
    --red-200: #FFBFBF;
    --red-300: #FF8585;
    --red-400: #FF5454;
    --red-500: #EF2B2A;
    --red-600: #DA120D;
    --red-700: #BF0A03;
    --red-800: #9F0A01;
    --red-900: #7D0800;

    /* semantic colors */
    --primary: var(--orange-400);
    --default-background: var(--gray-100);
    --chip-background: var(--gray-400);
    --button-disabled: var(--gray-300);
    --input-border: var(--gray-300);
    --header-border: var(--gray-200);
    --placeholder-text: var(--gray-500);
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
