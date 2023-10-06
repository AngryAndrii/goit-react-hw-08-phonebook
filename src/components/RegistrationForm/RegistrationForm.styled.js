import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  margin: 0 auto;
  button {
    width: 300px;
  }
  label > input {
    margin-left: 10px;
  }
`;
