import styled from "vue3-styled-components";

export const CheckboxWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  .attribute-value {
    align-items: center;
    display: flex;

    label {
      margin-right: 10px;
      text-transform: capitalize;
    }

    input {
      cursor: pointer;
    }
  }
`;
