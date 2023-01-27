import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle<{
  theme: { background: "#FFFFFF"; text: "#000000"; links: "#FFFFFF" };
}>`
  :root {
    --font-sans: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-headings: "Raleway", sans-serif;
    --font-serif: Georgia, Times, serif;
    --font-mono: Menlo, Courier, monospace;
    --color-black: #232b2b;
    --color-white: #ffffff;
    --color-purple: #903cf0;
    --color-pink: #eb5854;
    --max-container-width: 750px;
    --color-gray: #494949da;
    --color-light-gray: rgb(239, 241, 245);
    --color-red: #ff4136;
    --color-blue: #0074d9;
    --color-subtle-background: var(--color-light-gray);
  }

  ::selection {
    background: var(--color-black);
    color: var(--color-white);
  }

  body {
    overflow-x: hidden;
  }

  html,
  body {
    font-family: var(--font-sans);
    font-size: 10px;
    line-height: 1.6rem;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.5s ease;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-headings);
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.4;
  }
  h2 {
    font-size: 2.4rem;
    line-height: 1.6;
  }
  h3 {
    font-size: 1.8rem;
    line-height: 1.6;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    text-align: left;
  }
  ul {
    font-size: 1.6rem;
    line-height: 1.8;
    list-style-type: disc;
    padding-left: 30px;
    margin-bottom: 2rem;
  }
  ul > li > ul {
    margin-bottom: 0;
    list-style-type: circle;
  }
  ul > li > ul > li > ul {
    list-style-type: square;
  }

  blockquote {
    quotes: "“" "”" "‘" "’";
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 100;
    ${({ theme }) => theme.text};
  }
  blockquote::before {
    content: open-quote;
  }
  blockquote::after {
    content: close-quote;
  }

  a:link,
  a:active,
  a:visited {
    color: var(--color-purple);
    transition: color 1s ease;
  }
  a:hover {
    color: var(--color-pink);
    transition: color 0.4s ease;
  }

  button {
    font-family: var(--font-sans);
  }

@keyframes AnimateBGGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

export default GlobalStylesheet;
