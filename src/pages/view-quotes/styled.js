import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-size: cover;
  background: ${props => props.theme.background};
  font-family: sans-serif;
  height: 100vh;
  padding: 20px;
`;

export const StyledDiv = styled.section`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  border-radius: 10px;
  left: 50%;
  opacity: ${props => (props.isVisible ? '1' : '0')};
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.7s;
  width: 40vw;
`;
