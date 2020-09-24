import css from 'styled-jsx/css'
import { theme } from '@ui'
const styles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font: unset;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  a,
  button {
    line-height: normal;
  }

  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .skeleton {
    color: transparent !important;
    pointer-events: none;
    background-color: ${theme.colors.skeleton} !important;
    position: relative;
    overflow: hidden;
    width: auto;
    border-radius: 3px;
  }
  .skeleton:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    position: absolute;
    animation: wave 1.6s linear 0.5s infinite;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.28),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.28),
      transparent
    );
  }
`

export default styles
