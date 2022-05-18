import styled from "vue3-styled-components";

export const AlignmentWrapper = styled.div`
  margin-bottom: 20px;

  .attribute-name {
    margin: 10px 0;
    text-transform: capitalize;
  }

  .row {
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: center;
    width: 90px;

    .box {
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 30px;
      justify-content: center;
      width: 30px;
    }
  }
`;

export const CircleWrapper = styled.div`
  background-color: ${({ isSelected }) =>
    isSelected ? "#d40c0c" : "lightgray"};
  border-radius: 50%;
  height: 10px;
  width: 10px;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? "#920e0e" : "gray")};
  }
`;
