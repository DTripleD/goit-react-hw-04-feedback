import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${props =>
    (props.value === 'good' && 'green') ||
    (props.value === 'neutral' && 'orange') ||
    (props.value === 'bad' && 'red')};
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 10px;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
