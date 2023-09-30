import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 15px;

  label {
    display: flex;
    column-gap: 10px;
  }
  button {
    width: 150px;
  }
`;
