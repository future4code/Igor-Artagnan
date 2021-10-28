import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #222020;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--red-color);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(29, 27, 28, 0.7);
    }
  }
  
  body {
    background-color: #222020;
    color: #29292e;
  }
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
  :root {
    --orange-color: #222020;
    --grey-color: #b8b8b8;
    --red-color: #6d6767;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;