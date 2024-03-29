import { styled } from '../../styles'

export const CouchContainer = styled('div', {
  width: 'min(449px, 100%)',
  height: '222.96px',

  position: 'relative',
})

export const CouchImage = styled('img', {
  width: 'inherit',
})

export const ToggleExhibitionButton = styled('button', {
  color: '$text-color',
  background: 'transparent',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.1rem',
  height: '2.1rem',
  cursor: 'pointer',
  position: 'absolute',
  right: '3.125rem',
  top: '0.5rem',
})
