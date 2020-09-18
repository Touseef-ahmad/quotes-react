import styled from 'styled-components';

export const MyContainer = styled.section`
  background-size: cover;
  background: linear-gradient(0deg, rgb(136, 216, 176, 0.7), rgba(124, 223, 221, 0.8)),
    url('https://i.ytimg.com/vi/FAKW2lh9r_4/maxresdefault.jpg');
  font-family: sans-serif;
  height: 100vh;
  padding: 20px;
`;

export const CenteredDiv = styled.section`
  background-color: rgba(255, 255, 255, 0.7);
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
