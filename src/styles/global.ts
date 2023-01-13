import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '$background',
    color: '$text-color',
  },

  'body, input, textarea, button': {
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
  },

  h1: {
    fontFamily: 'Crimson Pro, sans-serif',
    fontWeight: 600,
  },

  a: {
    all: 'unset',
    cursor: 'pointer',
  },
})
