import { Link } from "react-router-dom"

import { Container, Links } from "./Styles"

import { Header } from "../../components/Header/Index"

import { Section } from "../../components/Section"

// Botão
import { Button } from "../../components/Button/Button"

function App() {

  return (
    <Container>
      <Header/>
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#1">https://github.com/gabriel-on</a>
          </li>
        </Links>
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}

export default App