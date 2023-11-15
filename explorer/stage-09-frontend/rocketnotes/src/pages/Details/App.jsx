import { Link } from "react-router-dom"

import { Container, Content, Links } from "./Styles"

import { Header } from "../../components/Header/index"

import { Section } from "../../components/Section"

import { Tag } from "../../components/Tag"

// Botão
import { Button } from "../../components/Button/Button"
import { ButtonText } from "../../components/ButtonText"

function App() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir" />
          <h1>
            Introdução
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptatibus molestiae rem repudiandae fugiat ea optio laudantium dolor ab aperiam debitis fugit, commodi necessitatibus deleniti dolorum beatae, earum iste voluptatem?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolorum unde nisi sit tenetur et eum facilis exercitationem repellendus facere pariatur itaque provident cumque asperiores, minima quibusdam? Beatae recusandae placeat libero itaque, debitis nulla ullam illo veritatis numquam necessitatibus! Quae optio est ullam porro facilis culpa aspernatur aliquid quidem, quod dignissimos dolores et modi sequi vero pariatur sunt ad quos maxime iusto quaerat molestias deserunt.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#1">https://github.com/gabriel-on</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="ReactJS" />
            <Tag title="Javascript" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}

export default App