import { Container, CouchInfo } from './AppStyles'
import { CouchDisplay } from './components/CouchDisplay'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  return (
    <Container>
      <CouchDisplay />
      <CouchInfo>
        <h6>CÓDIGO: 42404</h6>
        <h1>Sofá Margot II - Rosé</h1>
        <p>R$ 4.000</p>
        <button>ADICIONAR À CESTA</button>
      </CouchInfo>
    </Container>
  )
}
