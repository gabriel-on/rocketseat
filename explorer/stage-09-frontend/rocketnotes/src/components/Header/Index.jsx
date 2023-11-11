import { RiShutDownLine } from 'react-icons/ri'
import { Container, Logout, Profile } from './Styles'


export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/gabriel-on.png"
                    alt="Foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Black</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}