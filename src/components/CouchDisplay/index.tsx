import { useState } from 'react'
import { CouchContainer, CouchImage, ToggleExhibitionButton } from './styles'

import couchImage from '../../assets/couch.png'
import couchGif from '../../assets/couch.gif'
import rotateIcon from '../../assets/360deg.svg'
import closeIcon from '../../assets/closeIcon.svg'

export function CouchDisplay() {
  const [isShowingGif, setIsShowingGif] = useState(false)
  function handleToggleGif() {
    setIsShowingGif((state) => !state)
  }
  return (
    <CouchContainer>
      <ToggleExhibitionButton onClick={handleToggleGif}>
        <img
          src={isShowingGif ? closeIcon : rotateIcon}
          alt="Alternar modo de exibição"
        />
      </ToggleExhibitionButton>
      <CouchImage
        src={isShowingGif ? couchGif : couchImage}
        alt="Imagem ilustrativa do Sofá Margot II - Rosé"
      />
    </CouchContainer>
  )
}
