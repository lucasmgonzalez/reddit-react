import styled, { css } from 'styled-components'

const Button = styled.button.attrs({type: 'button'})`
  position: relative;

  display: inline-block;
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
  
  border-radius: 6px;
  border: 0;
  background-color: #666;
  
  font-size: 1.6rem;
  text-align: center;
  color: #fff;

  cursor: pointer;

  ${({active, theme}) => active && css`
    background-color: ${theme.colors.primary};
  `}

  &:disabled {
    cursor: not-allowed;
    
    &:after{
      content: '';
      
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
      
      background-color: rgba(255,255,255,0.2);
    }
  }
`;

Button.defaultProps = {
  margin: '0',
  padding: '12px',
  width: 'auto'
}

export default Button
