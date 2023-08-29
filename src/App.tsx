import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import theme from './styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@components/pages/ErrorPage';
import Home from '@components/pages/Home';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <RouterProvider router={router} />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
