import ErrorPage from '@components/pages/ErrorPage';
import Home from '@components/pages/Home';
import GlobalStyle from '@styles/GlobalStyle';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

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
