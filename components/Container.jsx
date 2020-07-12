import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};

  flex-direction: ${({direction}) => direction};
`

Container.defaultProps = {
  margin: '0',
  padding: '0',
  width: 'auto',
  direction: 'row'
}

export default Container;
