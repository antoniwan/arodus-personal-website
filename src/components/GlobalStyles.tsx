import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle<{
  theme: { background: "#FFFFFF"; text: "#000000" };
}>`
  :root {
    --font-sans: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-serif: Georgia, Times, serif;
    --font-mono: Menlo, Courier, monospace;
    --color-black: #232b2b;
    --color-white: #ffffff;
    --color-purple: #903cf0;
    --color-pink: #eb5854;
    --max-container-width: 750px;
    --color-light-gray: #cccccc;
    --color-red: #ff4136;
    --color-blue: #0074d9;
  }

  ::selection {
    background: var(--color-black);
    color: var(--color-white);
  }



  button {
    font-family: "Open Sans", serif;
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
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.4;
  }
  h2 {
    font-size: 1.8rem;
    line-height: 1.6;
  }
  h3 {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
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

  .box-list {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .box-list li {
    list-style-type: disc;
    line-height: 24px;
    flex-basis: calc(100% - 25px);
    margin-left: 25px;
  }

  img {
    width: 100%;
  }

  .full-width {
    margin-left: -2rem;
    margin-right: -2rem;
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

@media (min-width: 520px) {
  .box-list li {
    flex-basis: calc(50% - 25px);
  }
}
@media (min-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 2rem;
  }
  .box-list li {
    flex-basis: calc(33% - 25px);
  }

  img {
    object-fit: cover;
  }

  .full-width {
    margin-left: calc(-100vw / 2 + calc(var(--max-container-width)) / 2);
    margin-right: calc(-100vw / 2 + calc(var(--max-container-width)) / 2);
  }
}
`;

export default GlobalStylesheet;
