import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  width: 100%;
  font-size: 2.0rem;
  text-align: center;
  padding: 50px 0;
`

const Loading = props => (
  <Text>
    {props.text || 'Carregando...'}
  </Text>
) 


export default Loading
