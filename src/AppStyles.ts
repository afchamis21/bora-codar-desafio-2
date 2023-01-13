import { styled } from './styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8125rem',
  minHeight: '100vh',
  margin: '0 auto',
  width: 'fit-content',
})

export const CouchInfo = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  button: {
    marginTop: ' 0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '9.25rem',
    height: '2rem',
    borderRadius: '999px',
    fontSize: '0.75rem',

    color: '$text-color',
    background: 'transparent',
    border: '1px solid $text-color',

    '&:hover': {
      background: '$text-color',
      color: '$background',
      transition: 'all 0.3s',

      cursor: 'pointer',
    },
  },

  h1: {
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },

  h6: {
    fontWeight: 300,
    fontSize: '0.625rem',
  },
})
