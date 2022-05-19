import styled from "vue3-styled-components";

const props = { transparentMenu: Boolean };

export const ProdMenuWrapper = styled("div", props)`
  align-items: center;
  background-color: ${({ transparentMenu }) =>
    transparentMenu ? "transparent" : "white"};
  color: ${({ transparentMenu }) => (transparentMenu ? "white" : "black")};
  display: flex;
  height: 90px;
  justify-content: space-between;
  left: 0;
  padding: 0 30px;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: calc(100% - 60px);
  z-index: 10;

  .project-logo {
    font-size: 20px;
    font-weight: bolder;
    white-space: nowrap;
  }

  .project-menu {
    display: flex;
    font-size: 16px;
    white-space: nowrap;
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px;
    width: calc(100% - 20px);

    .project-logo {
      font-size: 16px;
    }

    .project-menu {
      font-size: 12px;
    }
  }

  body#force-mobile & {
    padding: 0 10px;
    width: calc(100% - 20px);

    .project-logo {
      font-size: 16px;
    }

    .project-menu {
      font-size: 12px;
    }
  }
`;

export const Item = styled.div`
  cursor: pointer;
  margin: 20px;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }

  body#force-mobile & {
    margin: 10px;
  }
`;
