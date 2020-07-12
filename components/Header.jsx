import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 70px;

  background-color: #000;
`

Header.Title = styled.h1`
  font-size: 3.0rem;
  color: #fff;
  text-transform: uppercase;

  span {
    color: ${({theme}) =>  theme.colors.primary};
  }
`

export default Header
