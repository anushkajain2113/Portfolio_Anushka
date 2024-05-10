import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
