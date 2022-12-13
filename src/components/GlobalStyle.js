import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      90deg,
      rgba(142, 58, 180, 1) 0%,
      rgba(29, 60, 253, 1) 50%,
      rgba(69, 252, 247, 1) 100%
    );
  }
  * {
      box-sizing: border-box;
    }
    
    p,
    h1,
    h2,
    h3 {
      margin: 0;
      margin-block-start: 0;
    margin-block-end: 0;
    }
    
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    
    a {
      text-decoration: none;
    }
    
    ul,
    ol {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }
    
    li {
      list-style: none;
    }
    
    button {
      cursor: pointer;
    }  
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;}
`;
