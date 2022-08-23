import {
  TopNav, Logo, Nav, FullLink,
} from './styled'

export default () => (
  <TopNav>
    <Logo to="/">UpStyled</Logo>
    <Nav>
      <FullLink to="/">
        Who We Can Help
      </FullLink>
      <FullLink to="/">
        About Us
      </FullLink>
      <FullLink to="/">
        More
      </FullLink>
      <FullLink to="/">
        Login
      </FullLink>
    </Nav>
  </TopNav>
)
