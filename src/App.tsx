import ErrorPage from '@components/pages/ErrorPage';
import Feed from '@components/pages/Feed';
import MainPage from '@components/pages/MainPage';
import GlobalStyle from '@styles/GlobalStyle';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/feed',
    element: <Feed />,
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
